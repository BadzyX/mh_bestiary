import { getFakeData } from "../../../../../utils/getFakeData";
import type { Character } from "../page";

export default function Character({ params }: { params: { name: string } }) {
  const characters: Character[] = getFakeData("characters.json");

  const decodedParamsName = decodeURIComponent(params.name.toLowerCase());

  const character = characters.find(
    (character) =>
      character.name.toLowerCase() === decodedParamsName || null
  );

  return character ? (
    <div>
      <p>Personnage: {character.name}</p>
      <p>Possédé: {character.possesses ? "Oui" : "Non"}</p>
      <p>Arme(s): {character.weapons.join(" / ")}</p>
      <p>Village: {character.village}</p>
    </div>
  ) : (
    <p>Ce personnage n'existe pas.</p>
  );
}
