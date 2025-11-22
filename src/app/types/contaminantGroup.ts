import type { Contaminant } from "./contaminant"

export interface ContaminantGroup {
  name: string
  key: string
  other: Contaminant[]
}
