"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "../../../../utils/fetchData";

// Type qu'on crée nous même
export type Weapon = {
  name: string;
};

export default function Game() {
  // Hook d'état qui permet de stocker des données définies
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction asynchrone qui permet de récupérer nos données depuis notre API
  const getAllWeapons = async () => {
    try {
      const data = await fetchData<Weapon[]>(
        `${process.env.API_BASE_URL}/weapons/getall`
      );
      setWeapons(data);
    } catch (err) {
      setError("Impossible de charger les données.");
    } finally {
      setLoading(false);
    }
  };

  // Hook qui permet de récupérer les données dès le chargement de la page
  useEffect(() => {
    getAllWeapons();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Boucle de tous nos objets de notre tableau "weapons"
  return weapons.map((weapon: Weapon, index: number) => (
    <div key={index}>
      <p>Nom de l'arme: {weapon.name}</p>
      <Link href={`/character/${encodeURIComponent(weapon.name)}`}>
        <i>Fiche de l'arme</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
