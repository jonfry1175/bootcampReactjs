import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";

const TodoCard = () => {
  // return (
  //   <div>
  //       <h5>Monday</h5>
  //       <ul>
  //           <li>Sarapan</li>
  //           <li>Makan</li>
  //           <li>Tidur</li>
  //       </ul>
  //   </div>
  // )

  return (
    <>
      <Card className="max-w-[400px]">
        <CardHeader className="font-bold text-lg">Monday</CardHeader>
        <Divider />
        <CardBody>
          <ul className="list-decimal list list-inside">
            <li>Sarapan</li>
            <li>Makan</li>
            <li>Tidur</li>
          </ul>
        </CardBody>
        <CardFooter>
          <Button color="danger">Finish</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default TodoCard;
