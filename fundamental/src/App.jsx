import Register from "./pages/Register";
import WishList from "./pages/WishList";
import {Toaster} from "sonner"
import TodoCard from "./components/TodoCard";


function App() {
  // return (
  //   <div>
  //     {/* <Toaster position="top-center"/>
  //     <WishList /> */}
  //   </div>
  // );

  return (
    <main className="p-4">
      <TodoCard 
      day="Senin" 
      
      numberOfActifities="9"
      />
    </main>
  )
}

export default App;
