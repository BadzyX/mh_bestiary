export default function Monster({ params }: { params: { name: string } }) {
  return <div>Monstre: {params.name}</div>;
}
