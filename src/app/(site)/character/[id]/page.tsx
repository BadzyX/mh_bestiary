"use client";

import { useEffect, useState } from "react";
import type { Character } from "../page";
import { fetchData } from "../../../../../utils/fetchData";

export default function Character({ params }: { params: { id: number } }) {
  // Hook d'état qui permet de stocker des données définies
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction asynchrone qui permet de récupérer nos données depuis notre API
  const getCharacter = async () => {
    try {
      const data = await fetchData<Character>(
        `${process.env.API_BASE_URL}/characters/get/${params.id}`
      );
      setCharacter(data);
    } catch (err) {
      setError("Impossible de charger les données.");
    } finally {
      setLoading(false);
    }
  };

  // Hook qui permet de récupérer les données dès le chargement de la page
  useEffect(() => {
    getCharacter();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return character ? (
    <div>
      <p>Personnage: {character.name}</p>
      <p>Possédé: {character.possesses ? "Oui" : "Non"}</p>
      <p>Arme(s): {character.weapons.join(" / ")}</p>
      <p>Village: {character.village}</p>
    </div>
  ) : (
    <p>Ce personnage n'existe pas.</p>
  );
}
