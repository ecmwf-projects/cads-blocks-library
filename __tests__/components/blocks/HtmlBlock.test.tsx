import React from 'react'
import { render, screen } from '@testing-library/react'

import { HtmlBlock } from '../../../src/components'

describe('type html', () => {
  it('it renders correctly', () => {
    render(
      <HtmlBlock
        block={{
          type: 'html',
          id: 'test-id-1',
          content:
            '<div>This is a raw HTML</div><p>With more HTML</p>',
        }}
      />,
    )

    screen.getByText('This is a raw HTML')
    screen.getByText('With more HTML')
  })
  it('it renders correctly without content', () => {
    render(
      <HtmlBlock
        block={{
          type: 'html',
          id: 'test-id-1',
          content: null as unknown as string,
        }}
      />,
    )
  })
})
