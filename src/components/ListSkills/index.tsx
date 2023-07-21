import React from "react";

export default function ListSkills({ poke }: any) {
  return (
    <ul>
      {poke.abilities.map((skill: any) => {
        return (
          <li key={skill.ability.name}>
            {skill.ability.name}
          </li>
        );
      })}
    </ul>
  );
}
