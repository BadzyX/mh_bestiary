export default function Character() {
  type Character = {
    name: string;
    possesses?: boolean;
    weapons: string[];
    village: string;
    dexterity?: number;
  };

  const character_1: Character = {
    name: "Hinoa",
    possesses: true,
    weapons: ["Lance", "Arc"],
    village: "Kamura",
  };

  const character_2: Character = {
    name: "Minoto",
    possesses: true,
    weapons: ["Katana", "Corne de Chasse"],
    village: "Kamura",
  };

  const character_3: Character = {
    name: "Fugen",
    weapons: ["Marteau", "Lames Doubles"],
    village: "Kamura",
  };

  return (
    <>
      <div>Personnage: {character_1.name}</div>
      <div>Possédé: {character_1.possesses ? "Oui" : "Non"}</div>
      <div>Arme(s): {character_1.weapons.join(" / ")}</div>
      <div>Village: {character_1.village}</div>
      <br />
      <div>Personnage: {character_2.name}</div>
      <div>Possédé: {character_2.possesses ? "Oui" : "Non"}</div>
      <div>Arme(s): {character_2.weapons.join(" / ")}</div>
      <div>Village: {character_2.village}</div>
      <br />
      <div>Personnage: {character_3.name}</div>
      <div>Possédé: {character_3.possesses ? "Oui" : "Non"}</div>
      <div>Arme(s): {character_3.weapons.join(" / ")}</div>
      <div>Village: {character_3.village}</div>
    </>
  );
}
