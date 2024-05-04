import Header from "./components/Header";
import TodoCard from "./components/TodoCard";
import CounterPage from "./pages/CounterPage";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import WishListRedux from "./pages/WishListRedux";
import WishList from "./pages/WishList";
import { Toaster } from "sonner";

function App() {
  return (
    <>
    <Toaster position="top-center" />
    <Routes>
      <Route element={<WishListRedux />} path="/" />
      <Route element={<WishList/>} path="/whislist" />
      <Route element={<Register />} path="/auth/register" />
      {/* /:username = params */}
      <Route element={<Profile />} path="/profile/:username" />
      <Route element={<CounterPage />} path="/counter" />
    </Routes>
    </>
  );
}

export default App;
