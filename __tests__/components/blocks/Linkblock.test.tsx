import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'

import { LinkBlock } from '../../../src/components'

describe('block type Link', () => {
  it('it renders correctly open in a new tab', () => {
    render(
      <LinkBlock
        block={{
          id: 'portal',
          type: 'link',
          href: 'https://support.ecmwf.int',
          title: 'ECMWF Support Portal',
          description: 'description text example',
          ['new-window']: true
        }}
      />
    )

    screen.getByText('ECMWF Support Portal')
    screen.getByText('description text example')
    const link = screen.getByRole('link') as HTMLAnchorElement
    expect(link.href).toBe('https://support.ecmwf.int/')
    expect(link.target).toBe('_blank')

    const svg = document.querySelector('svg')
    expect(svg).toBeTruthy()
  })
  it('it renders correctly open in the same tab without description', () => {
    render(
      <LinkBlock
        block={{
          id: 'portal',
          type: 'link',
          href: 'https://support.ecmwf.int',
          title: 'ECMWF Support Portal',
          ['new-window']: false
        }}
      />
    )

    screen.getByText('ECMWF Support Portal')
    const link = screen.getByRole('link') as HTMLAnchorElement
    expect(link?.href).toBe('https://support.ecmwf.int/')
    expect(link?.target).toBe('_self')

    const svg = document.querySelector('svg')
    expect(svg).toBeFalsy()
  })
  it('it renders null', () => {
    const element = render(
      <LinkBlock
        block={{
          id: 'portal',
          type: 'link',
          href: '',
          title: 'ECMWF Support Portal',
          ['new-window']: false
        }}
      />
    )
    expect(element.container.childElementCount).toEqual(0)
  })
})
