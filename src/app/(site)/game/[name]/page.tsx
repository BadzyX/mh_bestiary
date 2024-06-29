import { getFakeData } from "../../../../../utils/getFakeData";
import type { Game } from "../page";

export default function Game({ params }: { params: { name: string } }) {
  const games: Game[] = getFakeData("games.json");

  const decodedParamsName = decodeURIComponent(params.name.toLowerCase());

  const game = games.find(
    (game) => game.name.toLowerCase() === decodedParamsName || null
  );

  return game ? (
    <div>
      <p>Nom du jeu: {game.name}</p>
      <p>Plateforme(s): {game.platform.join(" / ")}</p>
    </div>
  ) : (
    <p>Ce jeu n'existe pas.</p>
  );
}
