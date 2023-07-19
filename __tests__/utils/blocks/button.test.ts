import { expect } from '@jest/globals'

import { isValidAction, isButtonType, isModalButton } from '../../../src/utils'

describe('Button utils', () => {
  it('check isValidAction', () => {
    expect(isValidAction('modal')).toBeTruthy()
    expect(isValidAction('randomKey')).toBeFalsy()
  })
  it('check isButtonType', () => {
    expect(
      isButtonType({
        id: '23423',
        type: 'button',
        action: 'modal',
        content: 'content random string',
        title: 'title'
      })
    ).toBeTruthy()
    expect(
      isButtonType({
        type: 'thumb-markdown',
        id: 'test-id-1',
        content:
          '##Markdown Title \n A paragraph with some **bold text** and _italic text_. \nA second paragraph with a bullet list: \n- item 1 \n- item 2',
        image: {
          url: 'https://datastore.copernicus-climate.eu/c3s/published-forms-v2/c3sprod/cems-glofas-seasonal-reforecast/overview.png',
          alt: 'image alternative text'
        }
      })
    ).toBeFalsy()
  })
  it('check isModalButton', () => {
    expect(
      isModalButton({
        info: {
          id: '23423',
          type: 'button',
          action: 'modal',
          content: 'content random string',
          title: 'title'
        },
        childrenButtons: []
      })
    ).toBeTruthy()
    expect(
      isModalButton({
        info: {
          id: '23423',
          type: 'button',
          action: 'modal',
          content: 'content random string',
          title: 'title'
        },
        childrenButtons: [
          {
            id: '23nvj23',
            type: 'button',
            action: 'download',
            content: 'download file',
            title: 'download title'
          }
        ]
      })
    ).toBeTruthy()
    expect(
      isModalButton({
        info: {
          id: '23423',
          type: 'button',
          action: 'modal',
          content: 'content random string',
          title: 'title'
        },
        childrenButtons: null
      })
    ).toBeFalsy()
    expect(
      isModalButton({
        info: {
          id: '23423',
          type: 'markdown',
          action: 'modal',
          content: 'content random string',
          title: 'title'
        },
        childrenButtons: null
      })
    ).toBeFalsy()
    expect(
      isModalButton({
        info: {
          id: '23423',
          type: 'button',
          action: 'modal',
          content: 'content random string',
          title: 'title'
        },
        childrenButtons: [
          {
            id: '23nvj23',
            type: 'markdown',
            action: 'download',
            content: 'download file',
            title: 'download title'
          }
        ]
      })
    ).toBeFalsy()
  })
})
