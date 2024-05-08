import Header from "./components/Header";
import {lazy, Suspense} from 'react'
import TodoCard from "./components/TodoCard";
import CounterPage from "./pages/CounterPage";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
// import WishListRedux from "./pages/WishListRedux";
import WishList from "./pages/WishList";
import { Toaster } from "sonner";
import Loader from "./components/Loader";

const WishListRedux = lazy(() => import('./pages/WishListRedux'))


function App() {
  return (
    <>
    <Toaster position="top-center" />
    <Routes>
      <Route element={
        <Suspense fallback={<Loader />}>
          <WishListRedux /> 
        </Suspense>
      } path="/" />
      <Route element={<WishList/>} path="/whislist" />
      <Route element={<Register />} path="/auth/register" />
      {/* /:username = params */}
      <Route element={<Profile />} path="/profile/:username" />
      <Route element={<CounterPage />} path="/counter" />
      <Route element={<Loader />} path="/loader" />
    </Routes>
    </>
  );
}

export default App;
