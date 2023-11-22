import React, { useState } from "react"

import styled from "styled-components"
import { GenerateBlocks, supportedTypes } from "../GenerateBlocks"
import { LinkBlock } from "./LinkBlock"
import { CheckIcon, DownIcon, NAIcon, WarningIcon } from "../icons/EQCIcons"
import { CheckItemBlockInterface } from "../../models"

/**
 * The check item block.
 * Used for:
 * - Checkitems (with nested checkitems)
 * - Check the status of the download form
 */
export const CheckItem = ({
  block,
}: {
  block: CheckItemBlockInterface
}) => {
  const supportedBlocks = block?.blocks?.filter(({ type }) => supportedTypes.includes(type)) || []

  const isExpandable = supportedBlocks.length >= 1

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Wrapper>
      <LinkWrapper>
        <LinkTextWrapper>
          <LinkBlock
            block={block}
          />
          <LinkStatus status={block.status}></LinkStatus>
        </LinkTextWrapper>
        <div
          onClick={() => setIsExpanded(!isExpanded)}>{
            isExpandable ? <ExpandIcon state={isExpanded} /> : null}</div>
      </LinkWrapper>
      {isExpandable && (
        <Content data-stylizable="block checkitem-content"
          className={
            isExpanded ? 'expanded' : ''
          }>
          <GenerateBlocks blocks={supportedBlocks} />
        </Content>
      )}
    </Wrapper>
  )
}

const ExpandIcon = ({
  state,
}: {
  state: boolean
}) => {
  return (
    <ExpandIconWrapper style={{
      transform: state ? 'rotate(180deg)' : 'rotate(0deg)',
    }}
    >
      <DownIcon />
    </ExpandIconWrapper>
  )
}

const useSwitchStatus = (status?: string) => {
  switch (status) {

    case 'OK':
      return <CheckIcon />

    case 'WARNING':
      return <WarningIcon />

    case 'NA':
      return <NAIcon />
    default:
      return <WarningIcon />
  }
}

const LinkStatus = (
  {
    status,
  }: {
    status?: string
  }
) => {
  const icon = useSwitchStatus(status)
  return (
    <LinkStatusWrapper>
      {icon}
    </LinkStatusWrapper>
  )
}

const ExpandIconWrapper = styled.div`
  cursor: pointer;
`

const Wrapper = styled.section`
    margin-top: 0;
    width: 100%;
    margin: 0;
    padding: 0;
  `

const Content = styled.div`
    margin-top: 1em;
    padding-bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 1em;
    overflow: hidden;
    max-height: 0;
    &.expanded {
      max-height: 100%;
    }
    gap: 1em;
  `

const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1em;
  justify-content: space-between;
`

const LinkStatusWrapper = styled.div`
  margin-left: 0.2em;
  margin-top: -4px;
`

const LinkTextWrapper = styled.div`
  display: flex;
`
