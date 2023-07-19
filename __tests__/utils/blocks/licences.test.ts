import { expect } from '@jest/globals'

import { getLicenceModalInfo } from '../../../src/utils'

describe('getLicenceModalInfo functions', () => {
  it('return null', () => {
    expect(getLicenceModalInfo(null as any)).toBeNull()
  })
  it('return the correct modal info WITH the download button', () => {
    expect(
      getLicenceModalInfo({
        id: '1234-id',
        revision: '1.5' as any,
        label: 'title modal',
        contents_url: 'http://contents_url.com',
        attachment_url: 'http://attachment_url.com',
        accepted: false,
      }),
    ).toEqual({
      info: {
        type: 'button',
        'contents-url': 'http://contents_url.com',
        title: 'title modal',
        id: `modal-1234-id-parent`,
      },
      childrenButtons: [
        {
          type: 'button',
          id: `modal-1234-id-child-copy`,
          title: 'Copy',
          action: 'copy-clipboard',
        },
        {
          type: 'button',
          id: `modal-1234-id-child-download`,
          title: 'Download PDF',
          action: 'download',
          'contents-url': 'http://attachment_url.com',
        },
      ],
    })
  })
  it('return the correct modal info WITHOUT the download button', () => {
    expect(
      getLicenceModalInfo({
        id: '1234-id',
        revision: '1.5' as any,
        label: 'title modal',
        contents_url: 'http://contents_url.com',
        accepted: false,
      }),
    ).toEqual({
      info: {
        type: 'button',
        'contents-url': 'http://contents_url.com',
        title: 'title modal',
        id: `modal-1234-id-parent`,
      },
      childrenButtons: [
        {
          type: 'button',
          id: `modal-1234-id-child-copy`,
          title: 'Copy',
          action: 'copy-clipboard',
        },
      ],
    })
  })
})
