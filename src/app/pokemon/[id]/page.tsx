"use client";

import { services } from "@/utils/functions__theme";
import React, { useEffect, useState } from "react";
import { buscaPokemon } from "@/data/services/busca-dados";
import { usePathname } from "next/navigation";

export default function SingleView() {
  const pathname = usePathname().slice(9);
  const [poke, setPoke] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const pokemon = await buscaPokemon(+pathname);
      setPoke(pokemon);
    })();
  }, [pathname]);

  console.log(poke);
  const pokemon = poke;
  return (
    <div>
      Está pagina e uma pagina dinamica, para renderizar os pokemons e exibir
      mais detalhes: id acessado
    </div>
  );
}
