import { getFakeData } from "../../../../../utils/getFakeData";
import type { Weapon } from "../page";

export default function Weapon({ params }: { params: { name: string } }) {
  const weapons: Weapon[] = getFakeData("weapons.json");

  const decodedParamsName = decodeURIComponent(params.name.toLowerCase());

  const weapon = weapons.find(
    (weapon) => weapon.name.toLowerCase() === decodedParamsName || null
  );

  return weapon ? (
    <div>
      <p>Nom de l'arme: {weapon.name}</p>
    </div>
  ) : (
    <p>Cette arme n'existe pas.</p>
  );
}
