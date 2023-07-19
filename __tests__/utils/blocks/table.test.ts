import { expect } from '@jest/globals'

import { mapDatasetForVerticalTable, mapDatasetForHorizontalTable } from '../../../src/utils'

describe('Table functions', () => {
  it('mapDatasetForVerticalTable', () => {
    const mappedData = mapDatasetForVerticalTable(
      [
        {
          data_type: 'Time series',
          hr_resolution: 'One time series per basin',
        },
        {
          data_type: '2 Time series',
          hr_resolution: '2 One time series per basin',
        },
      ],
      ['data_type', 'hr_resolution'],
    )
    expect(mappedData).toEqual([
      'Time series',
      'One time series per basin',
      '2 Time series',
      '2 One time series per basin',
    ])
  })
  it('mapDatasetForVerticalTable with empty header', () => {
    const mappedData = mapDatasetForVerticalTable(
      [
        {
          data_type: 'Time series',
          hr_resolution: 'One time series per basin',
        },
        {
          data_type: '2 Time series',
          hr_resolution: '2 One time series per basin',
        },
      ],
      null as any,
    )
    expect(mappedData).toEqual([])
  })
  it('mapDatasetForHorizontalTable', () => {
    const mappedData = mapDatasetForHorizontalTable(
      [
        {
          id: 'data_type',
          label: 'Data Type',
        },
        {
          id: 'hr_resolution',
          label: 'Horizontal resolution',
        },
      ],
      [
        {
          data_type: 'Time series',
          hr_resolution: 'One time series per basin',
        },
        {
          data_type: '2 Time series',
          hr_resolution: '2 One time series per basin',
        },
      ],
    )
    expect(mappedData).toEqual({
      ['Data Type']: ['Time series', '2 Time series'],
      ['Horizontal resolution']: ['One time series per basin', '2 One time series per basin'],
    })
  })
})
