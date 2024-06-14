import { getFakeData } from "../../../../utils/getFakeData";

export default function Place() {
  // Type qu'on crée nous même
  type Place = {
    name: string;
    type: "village" | "city";
    generation: number;
  };

  // Tableau d'objets importé du fichier "places.json"
  const places: Place[] = getFakeData("places.json");

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
