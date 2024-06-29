"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "../../../../utils/fetchData";

// Type qu'on crée nous même
export type Place = {
  name: string;
  type: "village" | "city";
  generation: number;
};

export default function Place() {
  // Hook d'état qui permet de stocker des données définies
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction asynchrone qui permet de récupérer nos données depuis notre API
  const getAllPlaces = async () => {
    try {
      const data = await fetchData<Place[]>(
        `${process.env.API_BASE_URL}/places/getall`
      );
      setPlaces(data);
    } catch (err) {
      setError("Impossible de charger les données.");
    } finally {
      setLoading(false);
    }
  };

  // Hook qui permet de récupérer les données dès le chargement de la page
  useEffect(() => {
    getAllPlaces();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
