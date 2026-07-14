export default async function MoviePage({ params }) {
  const { id } = await params;

  return (
    <main
      style={{
        background: "#111827",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Detalhes do Filme</h1>

      <h2>ID do filme:</h2>

      <p>{id}</p>
    </main>
  );
}