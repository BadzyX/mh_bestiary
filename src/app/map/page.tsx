export default function Map() {
  // Type qu'on crée nous même
  type Map = {
    name: string;
    type: string;
  };

  // Tableau d'objets
  const maps: Map[] = [
    {
      name: "Temple oublié",
      type: "Forêt",
    },
    {
      name: "Désert des Termites",
      type: "Désert",
    },
    {
      name: "Cavernes de Laves",
      type: "Volcan",
    },
  ];

  // Boucle de tous nos objets de notre tableau "maps"
  return maps.map((map: Map, index: number) => (
    <div key={index}>
      <p>Nom: {map.name}</p>
      <p>Type: {map.type}</p>

      <br />
    </div>
  ));
}
