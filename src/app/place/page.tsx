export default function Place() {
  // Type qu'on crée nous même
  type Place = {
    name: string;
    type: "village" | "city";
    generation: number;
  };

  // Tableau d'objets
  const places: Place[] = [
    {
      name: "Bernha",
      type: "village",
      generation: 4,
    },
    {
      name: "Astera",
      type: "village",
      generation: 5,
    },
    {
      name: "Seliana",
      type: "village",
      generation: 5,
    },
    {
      name: "Kamura",
      type: "village",
      generation: 5,
    },
    {
      name: "Val Habar",
      type: "city",
      generation: 4,
    },
  ];

  // Boucle de tous nos objets de notre tableau "places"
  return places.map((place: Place, index: number) => (
    <div key={index}>
      <p>Nom: {place.name}</p>
      <p>Type: {place.type === "city" ? "Ville" : "Village"}</p>
      <p>Génération: {place.generation}</p>

      <br />
    </div>
  ));
}
