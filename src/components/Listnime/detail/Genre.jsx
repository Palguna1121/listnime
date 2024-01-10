import React from "react";

const Genre = ({ anime }) => {
  return (
    <>
      {" "}
      <span className="text-white">Genre:</span> {anime.data.genres.map((genre) => genre.name).join(", ")}
    </>
  );
};

export default Genre;
