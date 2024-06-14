import Link from "next/link";
import { getFakeData } from "../../../../utils/getFakeData";

// Type qu'on crée nous même
export type Map = {
  name: string;
  type: string;
};

export default function Map() {
  // Tableau d'objets importé du fichier "maps.json"
  const maps: Map[] = getFakeData("maps.json");

  // Boucle de tous nos objets de notre tableau "maps"
  return maps.map((map: Map, index: number) => (
    <div key={index}>
      <p>Nom: {map.name}</p>
      <p>Type: {map.type}</p>
      <Link href={`/map/${encodeURIComponent(map.name)}`}>
        <i>Fiche de l'habitat</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
