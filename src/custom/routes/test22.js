import React from "react";
import Navigationbar from "custom/components/navigationbarCe";
import Mro from "custom/components/pop/mro";
import MroW from "custom/components/pop/mro_w";
import Watch from "custom/components/pop/watch";
import WatchW from "custom/components/pop/watch_w";
import Alert from "custom/components/pop/alert";
import Alert1 from "custom/components/pop/alert1";
import InSpection from "custom/components/pop/inspection";
import InSpection1 from "custom/components/pop/inspection1";
import MroCheck from "custom/components/pop/mro_check";

function Test22() {
  return (
    <div className="monitering">
      <Navigationbar />
      <div className="sub_container">
        모달창 목록
        <br/><br/>
        <Alert></Alert>&nbsp;&nbsp;
        <Alert1></Alert1><br/><br/>
        <MroW></MroW>&nbsp;&nbsp;
        <Mro></Mro><br/><br/>
        <WatchW></WatchW>&nbsp;&nbsp;
        <Watch></Watch><br/><br/>
        <InSpection></InSpection>&nbsp;&nbsp;
        <InSpection1></InSpection1><br/><br/>
        <MroCheck></MroCheck>
      </div>
    </div>
  )
}

export default Test22;