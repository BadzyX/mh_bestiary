import Link from "next/link";
import { getFakeData } from "../../../../utils/getFakeData";

// Type qu'on crée nous même
export type Character = {
  name: string;
  possesses?: boolean;
  weapons: string[];
  village: string;
  dexterity?: number;
};

export default function Character() {
  // Tableau d'objets importé du fichier "characters.json"
  const characters: Character[] = getFakeData("characters.json");

  // Boucle de tous nos objets de notre tableau "characters"
  return characters.map((character: Character, index: number) => (
    <div key={index}>
      <p>Personnage: {character.name}</p>
      <p>Possédé: {character.possesses ? "Oui" : "Non"}</p>
      <p>Arme(s): {character.weapons.join(" / ")}</p>
      <p>Village: {character.village}</p>
      <Link href={`/character/${encodeURIComponent(character.name)}`}>
        <i>Fiche du personnage</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
