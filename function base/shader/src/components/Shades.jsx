import React, { useEffect, useState, useRef } from "react";
import Values from "values.js";
import isColor from "is-color";
import Shade from "./Shade.jsx";

function Shades({ color }) {
  const [shade, setShade] = useState([]);
  const audioRef = useRef();
  useEffect(() => {
    if (isColor(color)) {
      createShades();
    }
  }, [color]);

  const createShades = () => {
    const shades_color = new Values(color).shades(1);
    setShade(shades_color);
  };

  const onColorCopy = () => {
    audioRef.current.play();
  };

  return (
    <div className="shades">
      <audio ref={audioRef} src={require("../assets/sound.mp3")} />
      {shade.map((s) => (
        <Shade shadeColor={s.hexString()} onColorCopy={onColorCopy} />
      ))}
    </div>
  );
}

export default Shades;
