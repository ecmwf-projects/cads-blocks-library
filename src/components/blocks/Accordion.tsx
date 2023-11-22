import React, { useEffect, useMemo, useState } from 'react'

import styled from 'styled-components'
import { AccordionSingle } from '@ecmwf-projects/cads-ui-library'

import { GenerateBlocks } from '../GenerateBlocks'

import type { AccordionBlock } from '../../models'

export const Accordion = ({ block }: { block: AccordionBlock }) => {


  // Get the current hash
  const [hash, setHash] = useState<string>()
  useEffect(() => {
    setHash(window.location.hash)
  }, [])

  // Check if the hash is the same as the block id
  const isHash = hash === `#${block.id}`

  // If the hash is the same as the block id, then expand the accordion
  const defaultValue = useMemo(() => {
    if (isHash) {
      return block.title
    }
    return block.collapsed ? '' : block.title
  }, [isHash, block.title, block.collapsed])

  return (<AccordionSingle
    rootProps={{
      id: block.id,
      defaultValue: defaultValue,
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
