import React from 'react'

import styled from 'styled-components'
import { BaseButton } from '@ecmwf-projects/cads-ui-library'

import { ButtonBlockInterface, ButtonActions, LayoutSectionBlock } from '../../models'
import { userAction, isButtonType, isValidAction } from '../../utils'

type Props = {
  block: ButtonBlockInterface
  allBlocks?: LayoutSectionBlock[]
  isParentButton?: boolean
  disabled?: boolean
}

export const ButtonBlock = ({
  block,
  allBlocks,
  isParentButton = true,
  disabled,
  ...props
}: Props) => {
  if ((isParentButton && block.parent) || !isValidAction(block.action)) return null
  const ButtonComponent = isParentButton ? Button : ChildButton
  const dataAttribute = isParentButton ? 'block button-parent' : 'block button-child'

  const componentByAction = {
    [ButtonActions.download]: (
      <ButtonComponent
        as="a"
        href={block['contents-url']}
        download
        role="button"
        rel="noreferrer"
        target="_blank"
        data-stylizable={dataAttribute}
      >
        {block.title}
      </ButtonComponent>
    ),
    [ButtonActions.modal]: isParentButton ? (
      <ButtonComponent
        data-stylizable={dataAttribute}
        onClick={() => {
          if (!allBlocks) return
          const childrenButtons = allBlocks.filter((b) => isButtonType(b) && b.parent === block.id)

          document.dispatchEvent(
            userAction({
              type: 'modalOpened',
              info: block,
              childrenButtons: childrenButtons as ButtonBlockInterface[],
            }),
          )
        }}
      >
        {block.title}
      </ButtonComponent>
    ) : null,
    [ButtonActions['copy-clipboard']]: (
      <ButtonComponent data-stylizable={dataAttribute} disabled={disabled} {...props}>
        {block.title}
      </ButtonComponent>
    ),
  }

  return componentByAction[block.action]
}

const Button = styled(BaseButton)`
  display: inline;
  border: none;
  background: transparent;
  width: fit-content;
  padding: unset;
`

const ChildButton = styled(BaseButton)`
  padding: 0.75em 1em;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  transition: background 0.3s;
  text-decoration: none;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
