import React, { useState, useEffect } from "react";
import "../CSS/Loading.css";

export default function Loading() {


  return (
    <div className="loadingContainer">
      <div>
        <h2>로딩중...</h2>
      </div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        alt="Loading Poké Ball"
      />

    </div>
  );
}
