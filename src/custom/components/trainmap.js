// import React from 'react';
// import ReactPanZoom from 'react-image-pan-zoom-rotate';
import Map from 'custom/img/map_dark.svg'

// import { ReactComponent as Reservation } from "custom/img/map_dark.svg";

export function TrainMap() {
  return (
    <div
      // className="element"
      // style={{
      //   overflow: 'hidden',
      //   position: 'relative',
      //   width: '100%'
      // }}
    >
      {/* <ReactPanZoom image={Map} alt="지하철 노선도" /> */}
      <img src={Map} alt="지하철 노선도" />
      {/* <Reservation></Reservation> */}
    </div>
  );
}

export default TrainMap;
