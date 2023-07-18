import React from 'react'

import styled from 'styled-components'
import { MarkdownToJSX } from 'markdown-to-jsx'

import { GenerateBlocks, supportedTypes } from '../GenerateBlocks'

import { SectionBlock } from '../../models'

export const Section = ({
  block,
  markdownParsingOptions,
}: {
  block: SectionBlock
  markdownParsingOptions: MarkdownToJSX.Options
}) => {
  const supportedBlocks = block.blocks.filter(({ type }) => supportedTypes.includes(type))
  if (supportedBlocks.length === 0) return null

  return (
    <Wrapper>
      {block?.title && block?.title.trim() && (
        <Title data-stylizable="block section-title">{block.title}</Title>
      )}
      <Content data-stylizable="block section-content">
        <GenerateBlocks blocks={supportedBlocks} markdownParsingOptions={markdownParsingOptions} />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 0;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1em;
`

const Title = styled.h4`
  margin: unset;
  margin-bottom: 1.5em;
`
