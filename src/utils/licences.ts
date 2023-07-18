import type { Licence } from '@ecmwf-projects/cads-ui-library/dist/types/widgets/LicenceWidget'

export const getLicenceModalInfo = (licence: Licence | undefined) => {
  if (!licence) return null

  return {
    info: {
      type: 'button',
      'contents-url': licence['contents_url'],
      title: licence.label,
      id: `modal-${licence.id}-parent`,
    },
    childrenButtons: [
      {
        type: 'button',
        id: `modal-${licence.id}-child-copy`,
        title: 'Copy',
        action: 'copy-clipboard',
      },
      ...(licence['attachment_url']
        ? [
            {
              type: 'button',
              id: `modal-${licence.id}-child-download`,
              title: 'Download PDF',
              action: 'download',
              'contents-url': licence['attachment_url'],
            },
          ]
        : []),
    ],
  }
}
