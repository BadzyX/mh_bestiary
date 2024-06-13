export default function Character() {
  type Character = {
    name: string;
    possesses?: boolean;
    weapons: string[];
    village: string;
    dexterity?: number;
  };

  const characters: Character[] = [
    {
      name: "Hinoa",
      possesses: true,
      weapons: ["Lance", "Arc"],
      village: "Kamura",
    },
    {
      name: "Minoto",
      possesses: true,
      weapons: ["Katana", "Corne de Chasse"],
      village: "Kamura",
    },
    {
      name: "Fugen",
      weapons: ["Marteau", "Lames Doubles"],
      village: "Kamura",
    },
  ];

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
