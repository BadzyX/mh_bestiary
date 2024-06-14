import { getFakeData } from "../../../../utils/getFakeData";

export default function Character() {
  // Type qu'on crée nous même
  type Character = {
    name: string;
    possesses?: boolean;
    weapons: string[];
    village: string;
    dexterity?: number;
  };

  // Tableau d'objets importé du fichier "characters.json"
  const characters: Character[] = getFakeData("characters.json");

  // Boucle de tous nos objets de notre tableau "characters"
  return characters.map((character: Character, index: number) => (
    <div key={index}>
      <p>Personnage: {character.name}</p>
      <p>Possédé: {character.possesses ? "Oui" : "Non"}</p>
      <p>Arme(s): {character.weapons.join(" / ")}</p>
      <p>Village: {character.village}</p>

      <br />
    </div>
  ));
}
