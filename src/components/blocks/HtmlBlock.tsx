import React from 'react'

import styled from 'styled-components'

import { HtmlBlockInteface, } from '../../models'

export const HtmlBlock = ({
  block,
}: {
  block: HtmlBlockInteface
}) => (
  <Content data-stylizable="block html-content">
    {block?.content && (
      <ContentWrapper dangerouslySetInnerHTML={{ __html: block.content }} />
    )}
  </Content>
)

const Content = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`
