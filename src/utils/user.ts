const userAction = <
  T extends {
    type: 'modalOpened' | 'formRequestOpened'
  } & {
    [K in keyof T as Exclude<K, 'type'>]: T[K]
  },
>(
  detail: T,
) => {
  return new CustomEvent('userAction', {
    detail,
  })
}

export { userAction }
