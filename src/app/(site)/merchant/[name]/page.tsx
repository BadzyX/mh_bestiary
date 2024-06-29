import { getFakeData } from "../../../../../utils/getFakeData";
import { getType, type Merchant } from "../page";

export default function Merchant({ params }: { params: { name: string } }) {
  const merchants: Merchant[] = getFakeData("merchants.json");

  const decodedParamsName: string = decodeURIComponent(
    params.name.toLowerCase()
  );

  const merchant = merchants.find(
    (merchant) => merchant.name.toLowerCase() === decodedParamsName || null
  );

  return merchant ? (
    <div>
      <p>Nom: {merchant.name}</p>
      <p>Type: {getType(merchant.type)}</p>
      <p>Village: {merchant.village}</p>
      <p>Génération: {merchant.generation}</p>
    </div>
  ) : (
    <p>Ce marchand n'existe pas.</p>
  );
}
