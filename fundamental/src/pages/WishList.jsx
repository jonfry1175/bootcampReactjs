import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { axiosInstance } from "../lib/axios";
import { useEffect } from "react";

const WishList = () => {
  const [inputWhislitsItem, setInputWhislitsItem] = useState("");
  const [wishListItems, setWishListItems] = useState([]);

  const getWishListItems = async () => {
    const response = await axiosInstance.get("/whislist");
    // console.log(response.data);
    setWishListItems(response.data);
  };

  const addWhistlistItem = async () => {
    try {
       const result = await axiosInstance.post("/whislist", {
        name: inputWhislitsItem,
      })
      if(result) {
        getWishListItems();
        alert("Succes!")
        setInputWhislitsItem("")
      } else {
        alert("Failed!")
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishListItems();
  }, []);
  return (
    <>
      <div className="flex items-center p-4 gap-4">
        <Input
          value={inputWhislitsItem}
          onChange={(event) => {
            if (event.target.value.length >= 8) {
              alert("maksimal 8!");
            } else {
              setInputWhislitsItem(event.target.value);
            }
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
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default WishList;
