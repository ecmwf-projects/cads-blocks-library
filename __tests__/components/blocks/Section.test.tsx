import React from 'react'
import { render, screen } from '@testing-library/react'

import { Section } from '../../../src/components'

describe('Section', () => {
  it('it renders correctly', () => {
    render(
      <Section
        markdownParsingOptions={{}}
        block={{
          type: 'section',
          id: '76r7tyv',
          title: 'title section',
          open: true,
          blocks: [
            {
              type: 'thumb-markdown',
              id: 'test-id-1',
              content: '##Markdown Title'
            }
          ]
        }}
      />
    )

    screen.getByText('title section')
    screen.getByText('Markdown Title')
  })
  it('it renders correctly without title', () => {
    render(
      <Section
        markdownParsingOptions={{}}
        block={{
          type: 'section',
          id: '76r7tyv',
          title: '',
          open: true,
          blocks: [
            {
              type: 'thumb-markdown',
              id: 'test-id-1',
              content: '##Markdown Title'
            }
          ]
        }}
      />
    )

    screen.getByText('Markdown Title')
  })
})
