import { getFakeData } from "../../../../../utils/getFakeData";
import type { Place } from "../page";

export default function Place({ params }: { params: { name: string } }) {
  const places: Place[] = getFakeData("places.json");

  const decodedParamsName = decodeURIComponent(params.name.toLowerCase());

  const place = places.find(
    (place) => place.name.toLowerCase() === decodedParamsName || null
  );

  return place ? (
    <div>
      <p>Nom: {place.name}</p>
      <p>Type: {place.type === "city" ? "Ville" : "Village"}</p>
      <p>Génération: {place.generation}</p>
    </div>
  ) : (
    <p>Cette ville/village n'existe pas.</p>
  );
}
