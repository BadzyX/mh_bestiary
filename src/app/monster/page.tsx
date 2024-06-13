export default function Monster() {
  type Monster = {
    name: string;
    map: string;
  };

  const monster_1: Monster = {
    name: "Rathalos",
    map: "Forêt ancienne",
  };

  const monster_2: Monster = {
    name: "Valstrax",
    map: "Cime oubliée",
  };

  const monster_3: Monster = {
    name: "Fatalis",
    map: "Château Schrade",
  };

  return (
    <>
      <div>Monstre: {monster_1.name}</div>
      <div>Habitat: {monster_1.map}</div>
      <br />
      <div>Monstre: {monster_2.name}</div>
      <div>Habitat: {monster_2.map}</div>
      <br />
      <div>Monstre: {monster_3.name}</div>
      <div>Habitat: {monster_3.map}</div>
    </>
  );
}
