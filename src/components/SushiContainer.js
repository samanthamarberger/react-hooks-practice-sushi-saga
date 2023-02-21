import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  sushis.map((sushi) => console.log(sushi))

  return (
    <div className="belt">
      {sushis.map((sushi) => <Sushi key={sushi.id} name={sushi.name} price={sushi.price} img={sushi.img_url}/>)}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
