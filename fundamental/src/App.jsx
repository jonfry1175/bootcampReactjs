import Header from "./components/Header";
import TodoCard from "./components/TodoCard";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import WishList from "./pages/WishList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<WishList />} path="/" />
      <Route element={<Register />} path="/auth/register" />
      {/* /:username = params */}
      <Route element={<Profile />} path="/profile/:username" />
    </Routes>
  );
}

export default App;
