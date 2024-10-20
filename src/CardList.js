import React from "react";
import Card from "./components/Card";

const CardList = ({ robots }) => {
  // destructuring props into robots

  const cardsArray = robots.map((user, i) => {
    // i for index
    // Make a loop using map (can do forEach as well)

    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      /> // Make a loop using map (can do forEach as well)
    );
  });
  return <div>{cardsArray}</div>;
};

export default CardList;
