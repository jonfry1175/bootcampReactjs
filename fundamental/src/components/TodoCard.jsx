import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { withAlert } from "../hoc/withAlert";

const TodoCard = (props) => {
  return (
    <>
    <p>{props.propsTambahan}</p>
      <Card className="max-w-[400px]">
        <CardHeader className="font-bold text-lg">
          {props.day} ({props.numberOfActifities})
        </CardHeader>
        <Divider />
        <CardBody>
          <ul className="list-decimal list list-inside">
            <li>Sarapan</li>
            <li>Makan</li>
            <li>Tidur</li>
            <li>{props.propsTambahan}</li>
          </ul>
        </CardBody>
        <CardFooter>
          <Button color="danger">Finish</Button>
        </CardFooter>
      </Card>
    </>
  );
};

TodoCard.propTypes = {
  day: PropTypes.string.isRequired,
  numberOfActifities: PropTypes.number.isRequired,
};

export default withAlert(TodoCard);
