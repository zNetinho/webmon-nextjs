import React from "react";
import PropTypes from 'prop-types';
import { IListSkill } from "@/data/@types/Components/IListSkills";
import TitleSection from "../TitleSection";

const defaultTitle = "Insira um titulo aqui"
export default function ListSkills({ poke, title = defaultTitle }: IListSkill) {
  return (
    <ul className="mr-10">
      <TitleSection>
        {title}
      </TitleSection>
      {poke.abilities.map((skill: any) => {
        return (
          <li 
            key={skill.ability.name}
            className="text-base font-roboto font-medium py-5"
          >
            {skill.ability.name}
          </li>
        );
      })}
    </ul>
  );
}


ListSkills.ProtoTypes = {
  poke: PropTypes.array.isRequired,
  title: PropTypes.string,
}
