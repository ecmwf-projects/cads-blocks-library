import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { AccordionSingle } from '@ecmwf-projects/cads-ui-library'

import { GenerateBlocks } from '../GenerateBlocks'

import type { AccordionBlock } from '../../models'
import { useHashSelected } from '../../utils/useHashSelected'

export const Accordion = ({ block }: { block: AccordionBlock }) => {

  const isHashSelected = useHashSelected(block.id)

  const [open, setOpen] = useState(!block.collapsed)
  useEffect(() => {
    if (isHashSelected) {
      setOpen(true)
      return
    }
    setOpen(!block.collapsed)
  }, [block.collapsed, isHashSelected])

  return (<AccordionSingle
    rootProps={{
      value: open ? block.title : '',
      onClick: () => {
        setOpen(!open)
      }
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
