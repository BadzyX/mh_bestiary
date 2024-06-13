export default function Monster() {
  type Monster = {
    name: string;
    map: string[];
  };

  const monsters: Monster[] = [
    {
      name: "Rathalos",
      map: ["Forêt ancienne"],
    },
    {
      name: "Valstrax",
      map: ["Cime oubliée"],
    },
    {
      name: "Fatalis",
      map: ["Château Schrade"],
    },
    {
      name: "Gore Magala",
      map: [
        "Steppe ancestrale",
        "Temple oublié",
        "Bois éternel",
        "Citadelle",
        "Grand océan",
      ],
    },
  ];

  return monsters.map((monster: Monster, index: number) => (
    <div key={index}>
      <p>Monstre: {monster.name}</p>
      <p>Habitat: {monster.map.join(" / ")}</p>

      <br />
    </div>
  ));
}
