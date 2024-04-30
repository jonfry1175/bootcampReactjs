import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoCard from "./components/TodoCard";
import Counter from "./components/Counter";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const [wishListItems, setWishListItems] = useState([
    "keyboard",
    "mouse",
    "monitor",
  ]);

  const addWhistlistItem = () => {
    const valueInputWhisList = inputRef.current.value;

    const newValue = [...wishListItems, valueInputWhisList];

    console.log(newValue);
    
    setWishListItems(newValue);
  };

  return (
    <>
      <div className="flex items-center p-4 gap-4">
        <Input ref={inputRef} label="Whistlist Item" color="secondary" />
        <Button onClick={addWhistlistItem} color="primary">
          Add
        </Button>
      </div>

      <ul className="list-decimal list-inside text-center">
        {wishListItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
