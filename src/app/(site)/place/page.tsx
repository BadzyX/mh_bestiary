import Link from "next/link";
import { getFakeData } from "../../../../utils/getFakeData";

// Type qu'on crée nous même
export type Place = {
  name: string;
  type: "village" | "city";
  generation: number;
};

export default function Place() {
  // Tableau d'objets importé du fichier "places.json"
  const places: Place[] = getFakeData("places.json");

  // Boucle de tous nos objets de notre tableau "places"
  return places.map((place: Place, index: number) => (
    <div key={index}>
      <p>Nom: {place.name}</p>
      <p>Type: {place.type === "city" ? "Ville" : "Village"}</p>
      <p>Génération: {place.generation}</p>
      <Link href={`/place/${encodeURIComponent(place.name)}`}>
        <i>Fiche du lieu</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
