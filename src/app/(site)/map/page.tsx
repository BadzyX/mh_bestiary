import { getFakeData } from "../../../../utils/getFakeData";

export default function Map() {
  // Type qu'on crée nous même
  type Map = {
    name: string;
    type: string;
  };

  // Tableau d'objets importé du fichier "maps.json"
  const maps: Map[] = getFakeData("maps.json");

  // Boucle de tous nos objets de notre tableau "maps"
  return maps.map((map: Map, index: number) => (
    <div key={index}>
      <p>Nom: {map.name}</p>
      <p>Type: {map.type}</p>

      <br />
    </div>
  ));
}
