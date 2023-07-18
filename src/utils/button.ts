import { ButtonActions, ButtonBlockInterface, Modal } from '../models'

export function isValidAction(k: string): k is keyof typeof ButtonActions {
  return k in ButtonActions
}

export function isButtonType(block: unknown): block is ButtonBlockInterface {
  return (block as ButtonBlockInterface)?.type === 'button'
}

export function isModalButton(data: unknown): data is Modal {
  return Boolean(
    (data as Modal)?.info?.type === 'button' &&
      (data as Modal).childrenButtons &&
      Array.isArray((data as Modal).childrenButtons) &&
      (data as Modal).childrenButtons.every((b: unknown) => isButtonType(b)),
  )
}
