import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'

import { Table } from '../../../src/components'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../mocks/defaultTheme'

describe('Table - type table', () => {
  it('horizontal table - it renders correctly', () => {
    const tableEl = render(
      <ThemeProvider theme={defaultTheme}>
        <Table
          block={{
            type: 'table',
            id: ' e54e5dsd45s5',
            caption: 'Data description',
            structure: {
              orientation: 'horizontal',
              headings: [
                {
                  id: 'data_type',
                  label: 'Data Type',
                },
                {
                  id: 'hr_coverage',
                  label: 'Horizontal coverage',
                },
                {
                  id: 'hr_resolution',
                  label: 'Horizontal resolution',
                },
              ],
            },
            content: [
              {
                data_type: 'Time series',
                hr_coverage:
                  'Average over the Antarctic and Greenland regions including the major drainage basins',
                hr_resolution: 'One time series per basin',
              },
              {
                data_type: '2 Time series',
                hr_coverage:
                  '2 Average over the Antarctic and Greenland regions including the major drainage basins',
                hr_resolution: '2 One time series per basin',
              },
            ],
          }}
        />
      </ThemeProvider>,
    )

    const row = tableEl.container.querySelector('tr')
    expect(row?.childElementCount).toBe(3)

    screen.getByText('Data description')
    screen.getByText('Data Type')
    screen.getByText('One time series per basin')
    screen.getByRole('table')
  })
  it('vertical table - it renders correctly', () => {
    const tableEl = render(
      <ThemeProvider theme={defaultTheme}>
        <Table
          block={{
            type: 'table',
            id: ' e54e5dsd45s5',
            caption: 'Data description',
            structure: {
              orientation: 'vertical',
              headings: [
                {
                  id: 'data_type',
                  label: 'Data Type',
                },
                {
                  id: 'hr_coverage',
                  label: 'Horizontal coverage',
                },
                {
                  id: 'hr_resolution',
                  label: 'Horizontal resolution',
                },
              ],
            },
            content: [
              {
                data_type: 'Time series',
                hr_coverage:
                  '##Average over \n the Antarctic and Greenland regions including the major drainage basins',
                hr_resolution: 'One time series per basin',
              },
              {
                data_type: '',
                hr_coverage: null as any,
                hr_resolution: '2 One time series per basin',
              },
            ],
          }}
        />
      </ThemeProvider>,
    )

    const headers = tableEl.container.querySelector('thead tr')
    expect(headers?.childElementCount).toBe(3)

    const cellTitle = tableEl.container.querySelector('h2')
    expect(cellTitle?.innerHTML).toBe('Average over')

    screen.getByText('Data description')
    screen.getByText('Horizontal resolution')
    screen.getByText('2 One time series per basin')
    screen.getByRole('table')
  })
  it(' table - render nothing', () => {
    const tableEl = render(
      <ThemeProvider theme={defaultTheme}>
        <Table
          block={{
            type: 'table',
            id: ' e54e5dsd45s5',
            caption: 'Data description',
            structure: {
              orientation: 'horizontal',
            } as any,
            content: [
              {
                data_type: 'Time series',
                hr_coverage:
                  'Average over the Antarctic and Greenland regions including the major drainage basins',
                hr_resolution: 'One time series per basin',
              },
              {
                data_type: '2 Time series',
                hr_coverage:
                  '2 Average over the Antarctic and Greenland regions including the major drainage basins',
                hr_resolution: '2 One time series per basin',
              },
            ],
          }}
        />
      </ThemeProvider>,
    )

    expect(tableEl.container).toBeEmptyDOMElement()
  })
})
