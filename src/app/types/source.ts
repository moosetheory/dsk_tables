import type { ContaminantGroup } from "./contaminantGroup"

export interface ContaminantSource {
  name: string
  contaminants: string[]
  internal: boolean
  external: boolean
}

export interface csDTO {
  sources: ContaminantSource[],
  contaminants: {
    name: string,
    key: string,
    other: {
      pathway: string,
      receptor: string
    }[]
  }[]
}
