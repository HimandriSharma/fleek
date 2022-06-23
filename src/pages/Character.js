import React from "react";
import { useEffect, useState } from "react";
import { Card } from "antd";
import backendService from "../api/BackendService";

function Character() {
  const [characters, setCharacters] = useState({});
  useEffect(() => {
    backendService
      .getCharacters()
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {characters.map &&
        characters.map((item) => (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src={item.image}
              />
            }
          >
            {item.name}
          </Card>
        ))}
    </div>
  );
}

export default Character;
