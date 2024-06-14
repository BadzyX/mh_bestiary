import { getFakeData } from "../../../../utils/getFakeData";

export default function Monster() {
  // Type qu'on crée nous même
  type Monster = {
    name: string;
    map: string[];
  };

  // Tableau d'objets importé du fichier "monsters.json"
  const monsters: Monster[] = getFakeData("monsters.json");

  // Boucle de tous nos objets de notre tableau "monsters"
  return monsters.map((monster: Monster, index: number) => (
    <div key={index}>
      <p>Monstre: {monster.name}</p>
      <p>Habitat: {monster.map.join(" / ")}</p>

      <br />
    </div>
  ));
}
