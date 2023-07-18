import React from 'react'

import styled, { css } from 'styled-components'
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx'

import { MarkdownBlockInterface, ThumbMarkdownBlock } from '../../models'

export const MarkdownBlock = ({
  block,
  markdownParsingOptions,
}: {
  block: MarkdownBlockInterface | ThumbMarkdownBlock
  markdownParsingOptions: MarkdownToJSX.Options
}) => (
  <Content data-stylizable="block markdown-content">
    {block?.content && (
      <Markdown id={block.id} options={markdownParsingOptions}>
        {block.content}
      </Markdown>
    )}
  </Content>
)

export const commonParagraphsStyles = css`
  line-height: 1.688rem;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

const Content = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.625em;
  }
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
  pre {
    white-space: pre-wrap;
  }
`
