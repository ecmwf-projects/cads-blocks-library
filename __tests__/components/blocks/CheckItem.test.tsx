import React from 'react'
import { render } from '@testing-library/react'

import { CheckItem } from '../../../src/components'

describe('type checkitem', () => {
  it('it renders correctly', () => {
    render(
      <CheckItem
        block={{
          "id": "qa_general_accuracy_and_consistency",
          "href": "?tab=quality-assessment#qa_general_accuracy_and_consistency",
          "type": "checkitem",
          "title": "Accuracy and Consistency",
          "status": "OK"
        }}
      />,
    )
  })
})
