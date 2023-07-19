import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'

import { ThumbMarkdown } from '../../../src/components'

describe('type thumb-markdown', () => {
  it('it renders correctly', () => {
    render(
      <ThumbMarkdown
        block={{
          type: 'thumb-markdown',
          id: 'test-id-1',
          content:
            '##Markdown Title \n A paragraph with some **bold text** and _italic text_. \nA second paragraph with a bullet list: \n- item 1 \n- item 2',
          image: {
            url: 'https://datastore.copernicus-climate.eu/c3s/published-forms-v2/c3sprod/cems-glofas-seasonal-reforecast/overview.png',
            alt: 'image alternative text',
          },
        }}
        markdownParsingOptions={{}}
      />,
    )

    screen.getByText('Markdown Title')
    const testImage = document.querySelector('img') as HTMLImageElement
    expect(testImage.alt).toContain('image alternative text')
    expect(testImage.src).toContain(
      'https://datastore.copernicus-climate.eu/c3s/published-forms-v2/c3sprod/cems-glofas-seasonal-reforecast/overview.png',
    )
  })
  it('it renders correctly without content', () => {
    render(
      <ThumbMarkdown
        block={{
          type: 'thumb-markdown',
          id: 'test-id-1',
          content: null as any,
          image: {
            url: 'https://datastore.copernicus-climate.eu/c3s/published-forms-v2/c3sprod/cems-glofas-seasonal-reforecast/overview.png',
            alt: 'image alternative text',
          },
        }}
        markdownParsingOptions={{}}
      />,
    )

    const testImage = document.querySelector('img') as HTMLImageElement
    expect(testImage.alt).toContain('image alternative text')
    expect(testImage.src).toContain(
      'https://datastore.copernicus-climate.eu/c3s/published-forms-v2/c3sprod/cems-glofas-seasonal-reforecast/overview.png',
    )
  })
})
