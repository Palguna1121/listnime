import React from "react";

const Studio = ({anime}) => {
  return (
    <>
      <span className="text-white"></span>{" "}
      {anime.data.studios.map((studio) => (
        <p key={studio.mal_id}>{`Studios: ${studio.name}`}</p>
      ))}
    </>
  );
};

export default Studio;
