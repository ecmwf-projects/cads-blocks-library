import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'

import { GenerateBlocks } from '../../src/components'
import { LayoutBlockTypes } from '../../src/models'

describe('Generate layout from JSON', () => {
  it('GenerateBlocks - type markdown - it renders correctly - ', () => {
    const element = render(
      <GenerateBlocks
        blocks={[
          {
            type: 'markdown' as keyof typeof LayoutBlockTypes,
            id: 'abstract-1',
            content: `# Here's a Heading`,
          },
          {
            type: 'markdown' as keyof typeof LayoutBlockTypes,
            id: 'abstract-2',
            content: `My test [link](https://google.com).`,
          },
          {
            type: 'accordion' as keyof typeof LayoutBlockTypes,
            id: 'abstract-3',
            content: `accordion text`,
          },
          // @ts-expect-error: check test corner case
          { type: 'invalid' },
        ]}
      />,
    )

    const h1 = element.container.querySelector('h1')
    expect(h1?.id).toBe(`abstract-1`)
    expect(h1?.innerHTML).toBe(`Here's a Heading`)

    const anchor = element.container.querySelector('a:not(.anchor)')
    expect(anchor?.innerHTML).toBe(`link`)
    expect(anchor).toHaveAttribute('href', 'https://google.com')

    expect(screen.queryByText('accordion text')).toBeNull()
  })

  describe('block type SECTION', () => {
    it('it renders correctly with link as blocks', () => {
      render(
        <GenerateBlocks
          blocks={[
            {
              id: '76r7tyv',
              title: 'title text section',
              type: 'section',
              open: false,
              blocks: [
                {
                  id: 'portal',
                  type: 'link',
                  href: 'https://support.ecmwf.int',
                  title: 'ECMWF Support Portal',
                  description: 'description text example',
                  ['new-window']: true,
                },
              ],
            },
          ]}
        />,
      )

      screen.getByText('title text section')
      screen.getByText('description text example')
      const link = document.querySelector('a:not(.anchor)') as HTMLAnchorElement
      expect(link?.href).toBe('https://support.ecmwf.int/')
      expect(link?.target).toBe('_blank')
    })
    it('it renders correctly with markdown', () => {
      const element = render(
        <GenerateBlocks
          blocks={[
            {
              id: '76r7tyv',
              title: 'title text section with markdown',
              type: 'section',
              open: false,
              blocks: [
                {
                  type: 'markdown' as keyof typeof LayoutBlockTypes,
                  id: 'abstract-1',
                  content: `# Here's a Heading`,
                },
                {
                  type: 'not-supported-type' as any,
                  id: 'abstract-1',
                  content: `This is not supported`,
                },
              ],
            },
          ]}
        />,
      )
      screen.getByText('title text section with markdown')

      const h1 = element.container.querySelector('h1')
      expect(h1?.id).toBe(`abstract-1`)
      expect(h1?.innerHTML).toBe(`Here's a Heading`)

      expect(screen.queryByText('This is not supported')).toBeNull()
    })
    describe('it renders null', () => {
      it('with not supported type', () => {
        const element = render(
          <GenerateBlocks
            blocks={[
              {
                id: '76r7tyv',
                title: 'title text section with markdown',
                type: 'section',
                open: false,
                blocks: [
                  {
                    type: 'not-supported-type' as any,
                    id: 'abstract-1',
                    content: `# Here's a Heading`,
                  },
                ],
              },
            ]}
          />,
        )
        
        // Check that we only have an anchor
        expect(element.container.childElementCount).toBe(1)
      })
    })
  })
})
