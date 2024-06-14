import Link from "next/link";
import { getFakeData } from "../../../../utils/getFakeData";

// Type qu'on crée nous même
export type Monster = {
  name: string;
  map: string[];
};

export default function Monster() {
  // Tableau d'objets importé du fichier "monsters.json"
  const monsters: Monster[] = getFakeData("monsters.json");

  // Boucle de tous nos objets de notre tableau "monsters"
  return monsters.map((monster: Monster, index: number) => (
    <div key={index}>
      <p>Monstre: {monster.name}</p>
      <p>Habitat: {monster.map.join(" / ")}</p>
      <Link href={`/monster/${encodeURIComponent(monster.name)}`}>
        <i>Fiche du monstre</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
