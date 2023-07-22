import { IListTypes } from '@/data/@types/Components/IListtypes';
import { services } from '@/utils/functions__theme';
import IconType from '../IconsTypes';
import TitleSection from '../TitleSection';
import iconsMap from '.'

const defaultTitle = "Insira um titulo aqui"

const functions = services

export default function ListTypes({poke, title = defaultTitle }: IListTypes) {
  return (
    <>
    <TitleSection>{title}</TitleSection>
    {poke.types.map((slot: any) => {
          return (
            <p 
              key={slot.slot} 
              className={`flex gap-2 bg-${slot.type.name} p-3 text-base text-center font-bold font-roboto border rounded-lg mb-2`}>
              <span><IconType type={slot.type.name} /></span>{functions.toCapitalize(slot.type.name)}
            </p>
          );
        })}
    </>
  )
}
