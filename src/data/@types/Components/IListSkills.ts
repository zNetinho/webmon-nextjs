import { Pokemon } from "../IPokemon"

export interface IListSkill {
  poke: {
    abilities: Array<string>
  }
  title: string
}