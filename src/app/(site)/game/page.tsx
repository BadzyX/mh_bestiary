"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "../../../../utils/fetchData";

// Type qu'on crée nous même
export type Game = {
  name: string;
  platform: string[];
};

export default function Game() {
  // Hook d'état qui permet de stocker des données définies
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction asynchrone qui permet de récupérer nos données depuis notre API
  const getAllGames = async () => {
    try {
      const data = await fetchData<Game[]>(
        `${process.env.API_BASE_URL}/games/getall`
      );
      setGames(data);
    } catch (err) {
      setError("Impossible de charger les données.");
    } finally {
      setLoading(false);
    }
  };

  // Hook qui permet de récupérer les données dès le chargement de la page
  useEffect(() => {
    getAllGames();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Boucle de tous nos objets de notre tableau "games"
  return games.map((game: Game, index: number) => (
    <div key={index}>
      <p>Nom du jeu: {game.name}</p>
      <p>Plateforme(s): {game.platform.join(" / ")}</p>
      <Link href={`/character/${encodeURIComponent(game.name)}`}>
        <i>Fiche du jeu</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
