import React, { useMemo } from 'react'

import styled from 'styled-components'
import { AccordionSingle } from '@ecmwf-projects/cads-ui-library'

import { GenerateBlocks } from '../GenerateBlocks'

import type { AccordionBlock } from '../../models'
import { useHashSelected } from '../../utils/useHashSelected'

export const Accordion = ({ block }: { block: AccordionBlock }) => {

  const isHashSelected = useHashSelected(block.id)

  const value = useMemo(() => {
    if (isHashSelected) {
      return block.title
    }
    return block.collapsed ? '' : block.title
  }, [block.collapsed, block.title, isHashSelected])
  
  return (<AccordionSingle
    rootProps={{
      value: value,
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
