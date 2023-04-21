import { useState } from "react";
export default function Map() {
  const [fromLocation, setFromLocation] = useState("");
  return (
    <div className="africaMap">
      <map name="africa-map">
        <area
          shape="circle"
          coords="400,400,50"
          alt="Cape Town"
          onClick={() => setFromLocation("Cape Town")}
        />
        <area
          shape="circle"
          coords="500,300,50"
          alt="Tunis"
          onClick={() => setFromLocation("Tunis")}
        />
        <area
          shape="circle"
          coords="600,400,50"
          alt="Paris"
          onClick={() => setFromLocation("Paris")}
        />
      </map>
      ;
    </>
  );
}
