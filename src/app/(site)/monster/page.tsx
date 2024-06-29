"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "../../../../utils/fetchData";

// Type qu'on crée nous même
export type Monster = {
  name: string;
  map: string[];
};

export default function Monster() {
  // Hook d'état qui permet de stocker des données définies
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction asynchrone qui permet de récupérer nos données depuis notre API
  const getAllMonsters = async () => {
    try {
      const data = await fetchData<Monster[]>(
        `${process.env.API_BASE_URL}/monsters/getall`
      );
      setMonsters(data);
    } catch (err) {
      setError("Impossible de charger les données.");
    } finally {
      setLoading(false);
    }
  };

  // Hook qui permet de récupérer les données dès le chargement de la page
  useEffect(() => {
    getAllMonsters();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Boucle de tous nos objets de notre tableau "monsters"
  return monsters.map((monster: Monster, index: number) => (
    <div key={index}>
      <p>Monstre: {monster.name}</p>
      <p>Habitat: {monster.map.join(" / ")}</p>
      <Link href={`/monster/${encodeURIComponent(monster.name)}`}>
        <i>Fiche du monstre</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
