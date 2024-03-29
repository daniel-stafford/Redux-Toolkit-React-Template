export type TodoState = {
  isLoading: boolean
  hasErrors: object
  data: {
    userId?: number
    title?: string
    completed?: boolean
  }
}

export type StoreState = {
  counter: number
  todo: TodoState
  theme: string
}

export enum Theme {
  light = 'light',
  dark = 'dark',
}
