import React, { useMemo } from 'react'

import styled from 'styled-components'
import { AccordionSingle } from '@ecmwf-projects/cads-ui-library'

import { GenerateBlocks } from '../GenerateBlocks'

import type { AccordionBlock } from '../../models'
import { useRouter } from 'next/router'

export const Accordion = ({ block }: { block: AccordionBlock }) => {

  /*
   * Open the accordion if hash matches the block id
   */
  const { asPath } = useRouter()
  const hash = asPath.split('#')[1]
  const isOpen = hash === `${block.id}`

  const defaultValue = useMemo(() => {
    if (isOpen) {
      return block.title
    }
    return block.collapsed ? '' : block.title
  }, [isOpen, block.title, block.collapsed])
  
  return (<AccordionSingle
    rootProps={{
      id: block.id,
      defaultValue: defaultValue
    }}
    itemProps={{
      value: block.title,
      trigger: () => (
        <AccordionTrigger data-stylizable="block accordion-trigger">{block.title}</AccordionTrigger>
      ),
    }}
  >
    <TabContent data-stylizable="block accordion-content">
      <GenerateBlocks blocks={block.blocks} />
    </TabContent>
  </AccordionSingle>
  )
}

const AccordionTrigger = styled.h5`
  font-weight: 700;
  margin: unset;
  margin-bottom: 1.125em;
`
const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5em;
`
