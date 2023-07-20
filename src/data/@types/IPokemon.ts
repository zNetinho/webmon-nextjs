export interface Pokemon {
  id: number;
  name: string;
  details: {
    sprites: {
      front_default: string;
    };
  };
  link: string,
}

export default interface Props {
  lista: Pokemon[];
}