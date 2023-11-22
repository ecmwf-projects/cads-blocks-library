import React from 'react'

import Link, { LinkProps } from 'next/link'
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

/**
 * Due to https://github.com/vercel/next.js/issues/42157, we can not
 * use the link component in some scenarios:
 * - Only updating the hash
 * - Only updating the query
 */
const CustomLink = (props: React.PropsWithChildren<{
  href: LinkProps['href']
  target: string
  passHref: boolean
}>) => {
  // Check the href to see if it is a hash or query
  // Check if href is a string or object
  const isString = typeof props.href === 'string'
  const isHash = isString && props.href.toString().startsWith('#')
  const isQuery = isString && props.href.toString().startsWith('?')
  const canUseLink = !isHash && !isQuery

  if (canUseLink) {
    return <CustomLinkWrapper {...props} />
  }

  // If we can't use the link component, then we need to
  // use an anchor tag
  const { href, children, target } = props

  return (
    <CustomAWrapper href={href.toString()} target={target}>
      {children}
    </CustomAWrapper>
  )
};

const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const CustomLinkWrapper = styled(Link)`
  display: inline;
  position: relative;
  svg {
    position: relative;
    margin-left: 0.625em;
    bottom: -2px;
  }
`
const CustomAWrapper = styled.a`
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
