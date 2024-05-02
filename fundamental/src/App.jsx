import Header from "./components/Header";
import TodoCard from "./components/TodoCard";
import CounterPage from "./pages/CounterPage";
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
      <Route element={<CounterPage />} path="/counter" />
    </Routes>
  );
}

export default App;
