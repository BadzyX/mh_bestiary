import { getFakeData } from "../../../../../utils/getFakeData";
import type { Monster } from "../page";

export default function Monster({ params }: { params: { name: string } }) {
  const monsters: Monster[] = getFakeData("monsters.json");

  const decodedParamsName = decodeURIComponent(params.name.toLowerCase());

  const monster = monsters.find(
    (monster) => monster.name.toLowerCase() === decodedParamsName || null
  );

  return monster ? (
    <div>
      <p>Monstre: {monster.name}</p>
      <p>Habitat: {monster.map.join(" / ")}</p>
    </div>
  ) : (
    <p>Ce monstre n'existe pas.</p>
  );
}
