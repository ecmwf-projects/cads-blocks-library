import React from 'react'

import styled from 'styled-components'
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx'

import { commonParagraphsStyles } from './Markdown'

import type { ThumbMarkdownBlock } from '../../models'

type Props = {
  block: ThumbMarkdownBlock
  markdownParsingOptions: MarkdownToJSX.Options
}

export const ThumbMarkdown = ({ block, markdownParsingOptions }: Props) => (
  <Wrapper data-stylizable="block thumb-markdown-content">
    {block.image?.url && <Image src={block.image.url} alt={block.image.alt} />}
    {block.content && (
      <Markdown id={block.id} options={markdownParsingOptions}>
        {block.content}
      </Markdown>
    )}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625em;
  margin-bottom: 0.625em;
  h1,
  h2,
  h3,
  h4,
  h5,
  span {
    margin-top: unset;
  }
  p,
  ul,
  li,
  span {
    ${commonParagraphsStyles}
  }
  @media (min-width: 569px) {
    display: block;
  }
`
const Image = styled.img`
  margin-left: 0;
  @media (min-width: 569px) {
    width: 250px;
    height: 175px;
    object-fit: contain;
    margin-left: 5em;
    float: right;
  }
`
