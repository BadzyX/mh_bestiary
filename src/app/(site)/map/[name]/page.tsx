import { getFakeData } from "../../../../../utils/getFakeData";
import type { Map } from "../page";

export default function Map({ params }: { params: { name: string } }) {
  const maps: Map[] = getFakeData("maps.json");

  const decodedParamsName = decodeURIComponent(params.name.toLowerCase());

  const map = maps.find(
    (map) => map.name.toLowerCase() === decodedParamsName || null
  );

  return map ? (
    <div>
      <p>Nom: {map.name}</p>
      <p>Type: {map.type}</p>
    </div>
  ) : (
    <p>Cet habitat n'existe pas.</p>
  );
}
