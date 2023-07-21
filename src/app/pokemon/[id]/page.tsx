"use client";

import React, { useEffect, useState } from "react";
import { buscaPokemon } from "@/data/services/busca-dados";
import ImageComponent from "@/components/ImageComponent";
import { usePathname } from "next/navigation";
import TitleSection from "@/components/TitleSection";
import ListSkills from "@/components/ListSkills";
import ListStatus from "@/components/ListStatus";
import ListTypes from "@/components/ListTypes";

export default function SingleView() {
  const pathname = usePathname().slice(9);
  const [poke, setPoke] = useState<any>(null);

  useEffect(
    () => {
      (async () => {
        const pokemon = await buscaPokemon(+pathname);
        setPoke(pokemon);
      })();
    },
    [pathname]
  );

  if (!poke) {
    return <div>Estamos buscando os dados do pokemon por favor aguarde...</div>;
  }

  return (
    <div className="m-w-3/4 flex justify-center">
      <div className="w-2/4 flex flex-col">
        <div>
          <ImageComponent
            src={poke.sprites.front_default}
            width={200}
            height={150}
            alt={poke.name}
          />
          <TitleSection>
            {poke.name}
          </TitleSection>
        </div>
        <div className="flex flex-col flex-wrap">
        <TitleSection>
            Habilidades
          </TitleSection>
          <ListSkills 
            poke={poke}
          />
          <p>
            O peso desse pokemon e de {poke.weight} Kl
          </p>
        </div>
      </div>
      <div className="flex">
        <ListTypes 
          poke={poke}
        />
        <div>
          <ListStatus
            poke={poke}
          />
        </div>
      </div>
    </div>
  );
}
