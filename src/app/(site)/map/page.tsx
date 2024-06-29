"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "../../../../utils/fetchData";

// Type qu'on crée nous même
export type Map = {
  name: string;
  type: string;
};

export default function Map() {
  // Hook d'état qui permet de stocker des données définies
  const [maps, setMaps] = useState<Map[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction asynchrone qui permet de récupérer nos données depuis notre API
  const getAllMaps = async () => {
    try {
      const data = await fetchData<Map[]>(
        `${process.env.API_BASE_URL}/maps/getall`
      );
      setMaps(data);
    } catch (err) {
      setError("Impossible de charger les données.");
    } finally {
      setLoading(false);
    }
  };

  // Hook qui permet de récupérer les données dès le chargement de la page
  useEffect(() => {
    getAllMaps();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Boucle de tous nos objets de notre tableau "maps"
  return maps.map((map: Map, index: number) => (
    <div key={index}>
      <p>Nom: {map.name}</p>
      <p>Type: {map.type}</p>
      <Link href={`/map/${encodeURIComponent(map.name)}`}>
        <i>Fiche de l'habitat</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
