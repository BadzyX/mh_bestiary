export default function Character() {
  // Variable de type string (chaîne de caractères)
  const charName: string = "Hinoa";
  // Variable de type number (numérique)
  const charForce: number = 50;
  const chearHealth: number = 100;
  const charVillage: string = "Kamura";

  type Character = {
    name: string;
    possesses?: boolean;
    weapons: string[];
    health: number;
    village: string;
    dexterity?: number;
  };

  const character_1: Character = {
    name: "Hinoa",
    possesses: true,
    weapons: ["Lance", "Arc"],
    health: 100,
    village: "Kamura",
  };

  const character_2: Character = {
    name: "Minoto",
    possesses: true,
    weapons: ["Katana", "Corne de Chasse"],
    health: 100,
    village: "Kamura",
  };

  const character_3: Character = {
    name: "Fugen",
    weapons: ["Marteau", "Lames Doubles"],
    health: 100,
    village: "Kamura",
  };

  return (
    <>
      <div>Personnage: {character_1.name}</div>
      <div>Possédé: {character_1.possesses ? "Oui" : "Non"}</div>
      <div>Arme(s): {character_1.weapons.join(" / ")}</div>
      <div>Santé: {character_1.health}</div>
      <div>Village: {character_1.village}</div>
      <br />
      <div>Personnage: {character_2.name}</div>
      <div>Possédé: {character_2.possesses ? "Oui" : "Non"}</div>
      <div>Arme(s): {character_2.weapons.join(" / ")}</div>
      <div>Santé: {character_2.health}</div>
      <div>Village: {character_2.village}</div>
      <br />
      <div>Personnage: {character_3.name}</div>
      <div>Possédé: {character_3.possesses ? "Oui" : "Non"}</div>
      <div>Arme(s): {character_3.weapons.join(" / ")}</div>
      <div>Santé: {character_3.health}</div>
      <div>Village: {character_3.village}</div>
    </>
  );
}
