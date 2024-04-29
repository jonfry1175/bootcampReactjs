import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoCard from "./components/TodoCard";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Header />
      {/* <TodoCard day="Monday" numberOfActifities={5}/>
      <TodoCard day="Tuesday" numberOfActifities={3} />
      <TodoCard day="Wednesday" numberOfActifities={2}  />
      <TodoCard day="Thursday" numberOfActifities={1}/> */}
      <Counter />
      <Footer message="Footer"/>
    </>
  );
}


export default App;
