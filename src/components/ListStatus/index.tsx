import React from "react";

export default function ListStatus({ poke }: any) {
  return (
    <>
      {poke.stats.map((stat: any) => {
            return (
              <div key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </div>
            );
          })}
    </>
  );
}
