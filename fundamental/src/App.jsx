import Header from "./components/Header";
import TodoCard from "./components/TodoCard";


function App() {
  return (
    <main className="p-4">
      <Header/>
      <TodoCard 
      day="Senin" 
      numberOfActifities={5}
      /> 
    </main>
  )
}

export default App;
