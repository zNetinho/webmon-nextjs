export interface IListStatus {
}

export interface IPropsListStatus {
  poke: {
    stats: Array<IPropsListStatus>
    stat: {
      base_stat: number,
      name: string,
    }
  }
  title: string,
  
}