import React from "react";
import Task13 from "./task13";
const Card = ({ title, description, imageUrl }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CardList = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={`Card ${index + 1}`}
          description={`This is description for card ${index + 1}`}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

const App = () => {
  const cards = [
    { imageUrl: "t3.jpg" },
    { imageUrl: "t3.jpg" },
    { imageUrl: "t3.jpg" },
  ];

  return (
    <div>
      <CardList cards={cards} />
    </div>
  );
};

export default App;
