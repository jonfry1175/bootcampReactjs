import React, { useState } from "react";
import { Button, Input, LinkIcon } from "@nextui-org/react";
import { axiosInstance } from "../lib/axios";
import { useEffect } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// dispatch = mengirimkan data
// selector = mengambil data

const WishListRedux = () => {
  const dispatch = useDispatch();
  const selectorWhislist = useSelector((store) => store.whislist.whislist);
  const [inputWhislitsItem, setInputWhislitsItem] = useState("");

  const getWhislist = async () => {
    const response = await axiosInstance.get("/whislist");
    // console.log(response.data);
    dispatch({ type: "GET_WHISLIST", payload: response.data });
  };

  const addWhistlistItem = async () => {
    try {
      const result = await axiosInstance.post("/whislist", {
        name: inputWhislitsItem,
      })

      if (result) {
          dispatch({ type: "ADD_WHISLIST", payload: result.data });
          toast.warning("Whislist item added");

          setInputWhislitsItem("");
      } else {
          toast.error("Whislist item not added");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("server error");
    }
  }

  const test = () => {
    console.log(selectorWhislist)
    toast.success("test")
    toast("test")
    // alert("test")
  }

  useEffect(() => {
    getWhislist();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center font-semibold">
          Whislist global state redux
        </h1>
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
          <Button 
          onClick={test} color="primary">
            check
          </Button>
        </div>

        <p>your input: {inputWhislitsItem}</p>

        <ul className="list-decimal list-inside text-center">
          {selectorWhislist.map((item) => (
            <li key={item.name}> {item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WishListRedux;
