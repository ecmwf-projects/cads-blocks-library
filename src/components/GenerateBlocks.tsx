import React from 'react'

import { MarkdownToJSX } from 'markdown-to-jsx'

import {
  Table,
  Section,
  LinkBlock,
  Accordion,
  ButtonBlock,
  MarkdownBlock,
  ThumbMarkdown,
  CheckItem,
} from './blocks'

import {
  TableBlock,
  SectionBlock,
  AccordionBlock,
  LayoutSectionBlock,
  LinkBlockInterface,
  ThumbMarkdownBlock,
  ButtonBlockInterface,
  LayoutSectionBlocksMix,
  MarkdownBlockInterface,
  HtmlBlockInteface,
  CheckItemBlockInterface,
} from '../models'
import { HtmlBlock } from './blocks/HtmlBlock'
import styled from 'styled-components'

const generateBlockByType = {
  ['markdown']: (block: MarkdownBlockInterface, markdownParsingOptions: MarkdownToJSX.Options) => (
    <MarkdownBlock block={block} markdownParsingOptions={markdownParsingOptions} />
  ),
  ['html']: (block: HtmlBlockInteface) => <HtmlBlock block={block} />,
  ['table']: (block: TableBlock) => <Table block={block} />,
  ['checkitem']: (block: CheckItemBlockInterface) => <CheckItem block={block} />,
  ['thumb-markdown']: (
    block: ThumbMarkdownBlock,
    markdownParsingOptions: MarkdownToJSX.Options,
  ) => <ThumbMarkdown block={block} markdownParsingOptions={markdownParsingOptions} />,
  ['section']: (block: SectionBlock, markdownParsingOptions: MarkdownToJSX.Options) => (
    <Section block={block} markdownParsingOptions={markdownParsingOptions} />
  ),
  ['link']: (block: LinkBlockInterface) => <LinkBlock block={block} />,
  ['accordion']: (block: AccordionBlock) => <Accordion block={block} />,
  ['button']: (
    block: ButtonBlockInterface,
    _: MarkdownToJSX.Options,
    allBlocks: LayoutSectionBlock[],
  ) => <ButtonBlock block={block} allBlocks={allBlocks} />,
}

const supportedTypes = Object.keys(generateBlockByType)

const GenerateBlocks = ({
  blocks,
  markdownParsingOptions = {},
}: {
  blocks: LayoutSectionBlock[] | null
  markdownParsingOptions?: MarkdownToJSX.Options
}) => {

  // Anchor fixture
  useAnchor();
  
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          if (!generateBlockByType[block.type]) return null
          return (
            <React.Fragment key={`${i}_${block.id}`}>
              <Anchor className="anchor" id={block.id} />
              {generateBlockByType[block.type](
                block as LayoutSectionBlocksMix,
                markdownParsingOptions,
                blocks,
              )}
            </React.Fragment>
          )
        })}
    </>
  )
};

export { GenerateBlocks, supportedTypes }

const useAnchor = () => {

}


const Anchor = styled.a`
  position: relative; 
  display: none; 
  visibility: hidden; 
  height: 0;
`;
