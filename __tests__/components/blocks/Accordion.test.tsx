import React from 'react'

import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'


import { Accordion } from '../../../src/components'

import { act } from 'react-dom/test-utils'

describe('block type Accordion', () => {
  it('it renders open', () => {
    render(
      <Accordion
        block={{
          id: '76r7tyv',
          title: 'title text accordion',
          type: 'accordion',
          collapsed: false,
          blocks: [
            {
              id: 'portal',
              type: 'link',
              href: 'https://support.ecmwf.int',
              title: 'ECMWF Support Portal',
              description: 'description text example',
              ['new-window']: true
            }
          ]
        }}
      />
    )

    screen.getByText('title text accordion')
    screen.getByText('description text example')
    const link = screen.getByRole('link') as HTMLAnchorElement
    expect(link.href).toBe('https://support.ecmwf.int/')
    expect(link.target).toBe('_blank')
  })
  it('it renders collapsed', () => {
    render(
      <Accordion
        block={{
          id: '76r7tyv',
          title: 'title text accordion',
          type: 'accordion',
          collapsed: true,
          blocks: [
            {
              id: 'portal',
              type: 'link',
              href: 'https://support.ecmwf.int',
              title: 'ECMWF Support Portal',
              description: 'description text example',
              ['new-window']: true
            }
          ]
        }}
      />
    )

    screen.getByText('title text accordion')
    expect(screen.queryByText('description text example')).toBeFalsy()
    act(() => {
      screen.getByText('title text accordion').click()
    })
    expect(screen.queryByText('description text example')).toBeTruthy()
  })
})
