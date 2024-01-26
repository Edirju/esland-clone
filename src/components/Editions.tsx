import { useState } from "preact/hooks";
import Galeria1 from "./Galeria1";
import Numeros1 from "./Numeros1";
import Palmares from "./Palmares";
import editions from "@/data/editions-info.json";
import styles from "@/components/styles/Editions.module.css";

export default function Editions({ i18n }: { i18n: any }) {
  const [edicion, setEdicion] = useState("1");

  return (
    <>
      <div className="flex h-24 mt-4">
        {editions.map(({ edition, name }) => {
          return (
            <button
              className={`
										flex-1 rounded-t-2xl transition-colors
										text-white text-xl font-bold
										${styles.tab}
										${edicion==edition? "z/10":"bg-[#222b5b] hover:bg-[#1b2663]"}
									`}
              onClick={() => setEdicion(edition)}
            >
              {name}
            </button>
          );
        })}
      </div>
			
      <Palmares edicion={edicion} />
      <Galeria1 i18n={i18n} edicion={edicion} />
      <Numeros1 i18n={i18n} edicion={edicion} />
    </>
  );
}
