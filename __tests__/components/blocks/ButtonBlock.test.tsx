import React from 'react'

import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'

import { ButtonBlock } from '../../../src/components'
import { LayoutSectionBlock, ButtonBlockInterface } from '../../../src/models'

const parentBlock: ButtonBlockInterface = {
  type: 'button',
  id: 'era5-licences',
  title: 'Licence',
  action: 'modal',
  content:
    '##Markdown Title \n A paragraph with some **bold text** and _italic text_. \nA second paragraph with a bullet list: \n- item 1 \n- item 2',
}

const downloadButton: ButtonBlockInterface = {
  type: 'button',
  id: 'era5-licences-child',
  title: 'download',
  action: 'download',
  parent: 'era5-licences',
  'contents-url': 'https://...',
}

const copyButton: ButtonBlockInterface = {
  type: 'button',
  id: 'era5-licences-child',
  title: 'copy',
  action: 'copy-clipboard',
}

const allBlocks: LayoutSectionBlock[] = [
  {
    type: 'thumb-markdown',
    id: 'test-id-1',
    content:
      '##Markdown Title \n A paragraph with some **bold text** and _italic text_. \nA second paragraph with a bullet list: \n- item 1 \n- item 2',
    image: {
      url: 'https://datastore.copernicus-climate.eu/c3s/published-forms-v2/c3sprod/cems-glofas-seasonal-reforecast/overview.png',
      alt: 'image alternative text',
    },
  },
  { ...parentBlock, parent: 'era5-licences' },
  { ...downloadButton, parent: 'era5-licences' },
  { ...copyButton, parent: 'era5-licences' },
]

describe('block type Button', () => {
  describe('PARENT', () => {
    describe('it renders correctly', () => {
      it('without parent type modal', () => {
        render(<ButtonBlock block={parentBlock as any} allBlocks={allBlocks as any} />)
        expect(screen.getByText('Licence')).toBeTruthy()
        screen.getByText('Licence').click()
      })
      it('without parent type download', () => {
        render(
          <ButtonBlock
            block={{
              type: 'button',
              id: 'era5-licences',
              title: 'download',
              action: 'download',
              'contents-url': 'http://...',
            }}
            allBlocks={allBlocks as any}
          />,
        )
        expect(screen.getByText('download')).toBeTruthy()
        screen.getByText('download').click()
      })
    })
    describe('it renders null', () => {
      it('with parent', () => {
        const element = render(
          <ButtonBlock
            block={{
              type: 'button',
              id: 'era5-licences-download',
              parent: 'era5-licences',
              title: 'Download PDF',
              action: 'download',
              'contents-url': 'https://...',
            }}
            allBlocks={allBlocks as any}
          />,
        )
        expect(element.container).toBeEmptyDOMElement()
      })
      it('with unknown action', () => {
        const element = render(
          <ButtonBlock
            block={{
              type: 'button',
              id: 'era5-licences-clipboard',
              title: 'Copy to clipboard',
              action: 'test' as any,
            }}
            allBlocks={allBlocks}
          />,
        )
        expect(element.container).toBeEmptyDOMElement()
      })
    })
  })
  describe('CHILDREN', () => {
    describe('it renders correctly', () => {
      it('without parent type download', () => {
        render(<ButtonBlock block={downloadButton} allBlocks={allBlocks} isParentButton={false} />)
        expect(screen.getByText('download')).toBeTruthy()
        screen.getByText('download').click()
      })
      it('without parent type download', () => {
        render(<ButtonBlock block={copyButton} allBlocks={allBlocks} isParentButton={false} />)
        expect(screen.getByText('copy')).toBeTruthy()
        screen.getByText('copy').click()
      })
    })
    describe('it renders null', () => {
      it('with type modal', () => {
        const element = render(
          <ButtonBlock block={parentBlock} allBlocks={allBlocks} isParentButton={false} />,
        )
        expect(element.container).toBeEmptyDOMElement()
      })
      it('with unknown action', () => {
        const element = render(
          <ButtonBlock
            block={{
              ...copyButton,
              action: 'unknown-test' as any,
              parent: 'era5-licences',
            }}
            allBlocks={allBlocks}
            isParentButton={false}
          />,
        )
        expect(element.container).toBeEmptyDOMElement()
      })
      it('without allBlocks', () => {
        const element = render(
          <ButtonBlock
            block={{
              ...copyButton,
              action: 'unknown-test' as any,
              parent: 'era5-licences',
            }}
            allBlocks={null as any}
            isParentButton={false}
          />,
        )
        expect(element.container).toBeEmptyDOMElement()
      })
    })
  })
})
