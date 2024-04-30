import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoCard from "./components/TodoCard";
import Counter from "./components/Counter";
import { Button, Input } from "@nextui-org/react";
import { useState, useRef } from "react";

function App() {
  // const inputRef = useRef();
  const [inputWhislitsItem, setInputWhislitsItem] = useState("");

  // yang didalam array = default value
  const [wishListItems, setWishListItems] = useState([
    "keyboard",
    "mouse",
    "monitor",
  ]);

  const addWhistlistItem = () => {
    const newWishListItems = [...wishListItems, inputWhislitsItem];
    // console.log(newWishListItems);
    setWishListItems(newWishListItems);

    setInputWhislitsItem("");
  };

  return (
    <>
      <div className="flex items-center p-4 gap-4">
        <Input
          value={inputWhislitsItem}
          onChange={(event) => {
            event.target.value.length >= 8 ? alert ("maksimal 8 karakter") : setInputWhislitsItem(event.target.value)
          }}
          label="Whistlist Item"
          color="secondary"
        />
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
