export interface Position {
  x: number,
  y: number
}
export interface Volumn {
  height: number,
  width: number
}
export interface editableState {
  selected: boolean,
  loading: boolean,
  created: boolean,
  inactive: boolean
}