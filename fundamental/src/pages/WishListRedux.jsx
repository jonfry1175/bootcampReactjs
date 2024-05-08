import React, { useState } from "react";
import { Button, Input, LinkIcon } from "@nextui-org/react";
import { axiosInstance } from "../lib/axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
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
        toast.success("Whislist item added");

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
    console.log(selectorWhislist);
    toast.success("test");
    toast("test");
    // alert("test")
  };

  const withoutArrow = (num1, num2) => {
    console.log(`without arrow ${num1} ${num2}`);
  }

  const withArrrow = (num1, num2) => {
    console.log(`with arrow ${num1} ${num2}`);
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
          <Button onClick={test} color="primary">
            check
          </Button>
        </div>

        <p>your input: {inputWhislitsItem}</p>

        <ul className="list-decimal list-inside text-center">
          {selectorWhislist.map((item) => (
            <li key={item.name}> {item.name}</li>
          ))}
        </ul>
        <Link to='/auth/register'>Register</Link>
      </div>
      <Button 
      onClick={withoutArrow(2, 3)}
      color="secondary">onClick without arrow </Button>
      <Button 
      onClick={() => withArrrow(5, 6)}
      color="warning">onClick with arrow </Button>
    </>
  );
};

export default WishListRedux;
