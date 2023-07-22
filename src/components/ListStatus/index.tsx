import { IPropsListStatus } from "@/data/@types/Components/IListStatus";
import TitleSection from "../TitleSection";

const defaultTitle = "Insira um titulo aqui"

export default function ListStatus({ poke, title = defaultTitle }: IPropsListStatus) {

  return (
    <>
    <TitleSection>{title}</TitleSection>
      {poke.stats.map((stat: any) => {
            return (
              <div 
                key={stat.stat.name}
                className="my-3 text-xl font-bold font-roboto"
                id="chart"
              >
                {stat.stat.name.toUpperCase()}: 
                <span className="font-normal pl-5">
                  {stat.base_stat}%
                </span>
              </div>
            );
          })}
    </>
  );
}
