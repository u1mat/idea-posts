import { TrpcProvider } from "./lib/trpc";
import { trpc } from "./lib/trpc";

function AppContent() {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery();

  if (isLoading) return <div>Loading...</div>;
  
  if (isError) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="App">
      {data?.map((idea) => (
        <div key={idea.id}>
          <h2>{idea.title}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <TrpcProvider>
      <AppContent />
    </TrpcProvider>
  );
}

export default App;
