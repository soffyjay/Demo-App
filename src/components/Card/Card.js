import React from "react";
import { CardStyle } from "./CardStyle";
import CardButton from "../CardButton/CardButton";

const Card = ({
  name,
  description,
  handleDelete,
  handleClick,
  handleEditClick,
  loading,
  id,
}) => {
  return (
    <CardStyle onClick={() => handleClick(id)} key={id}>
      <span>Name</span>
      <h3>{name}</h3>
      <span>Description</span>
      <p>{description}</p>

      <div className="Actions">
        <CardButton
          text="Edit"
          id={id}
          loading={loading}
          handleClick={() => handleEditClick(id)}
        />
        <CardButton
          text="Delete"
          primary
          loading={loading}
          handleClick={() => handleDelete(id)}
          id={id}
        />
      </div>
    </CardStyle>
  );
};

export default Card;
