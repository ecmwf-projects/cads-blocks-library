import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

import { LinkBlockInterface } from '../../models'

export const LinkBlock = ({ block }: { block: LinkBlockInterface }) => {
  if (!block.href || !block.title) return null
  return (
    <BlockContent data-stylizable="block link-container">
      <CustomLink target={block['new-window'] ? '_blank' : '_self'} href={block.href} passHref>
        {block.title}
        {block['new-window'] && <ExternalLinkIcon />}
      </CustomLink>
      {block.description && <Description>{block.description}</Description>}
    </BlockContent>
  )
}

const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const CustomLink = styled(Link)`
  display: inline;
  position: relative;
  svg {
    position: relative;
    margin-left: 0.625em;
    bottom: -2px;
  }
`
const Description = styled.p`
  line-height: 1.6875em;
`
