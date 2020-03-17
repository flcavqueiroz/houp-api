import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import "./style.scss";

export interface Props {
  text: string;
  name: string;
  city: string;
  image: string;
}

const Client: React.FC<Props> = ({ text, image, city, name }) => {
  return (
    <div className="card">
      <Avatar className="img" src={image} />
      <div className="content">
        <Typography
          style={{ fontWeight: 700, marginBottom: 6, color: "#125A7A" }}
        >
          {name} - {city}
        </Typography>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Client;
