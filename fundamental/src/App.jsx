import Register from "./pages/Register";
import WishList from "./pages/WishList";
import {Toaster} from "sonner"

function App() {
  return (
    <div>
      <Toaster position="top-center"/>
      <WishList />
    </div>
  );
}

export default App;
