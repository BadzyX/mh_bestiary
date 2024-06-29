"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "../../../../utils/fetchData";

// Type qu'on crée nous même
export type Merchant = {
  name: string;
  type: "classic" | "blacksmith" | "food";
  village: string;
  generation: number;
};

export const getType = (type: "classic" | "blacksmith" | "food") => {
  switch (type) {
    case "classic":
      return "Classique";

    case "blacksmith":
      return "Forgeron";

    case "food":
      return "Repas";
  }
};

export default function Merchant() {
  // Hook d'état qui permet de stocker des données définies
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction asynchrone qui permet de récupérer nos données depuis notre API
  const getAllMerchants = async () => {
    try {
      const data = await fetchData<Merchant[]>(
        `${process.env.API_BASE_URL}/merchants/getall`
      );
      setMerchants(data);
    } catch (err) {
      setError("Impossible de charger les données.");
    } finally {
      setLoading(false);
    }
  };

  // Hook qui permet de récupérer les données dès le chargement de la page
  useEffect(() => {
    getAllMerchants();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Boucle de tous nos objets de notre tableau "'merchants"
  return merchants.map((merchant: Merchant, index: number) => (
    <div key={index}>
      <p>Nom: {merchant.name}</p>
      <p>Type: {getType(merchant.type)}</p>
      <p>Village: {merchant.village}</p>
      <p>Génération: {merchant.generation}</p>
      <Link href={`/merchant/${encodeURIComponent(merchant.name)}`}>
        <i>Fiche du marchand</i>
      </Link>

      <br />
      <br />
    </div>
  ));
}
