import React, { useState } from 'react'

function TodayAll () {
  const week = ['일','월','화','수','목','금','토'];

  const now = new Date();	// 현재 날짜 및 시간
  const year = now.getFullYear();	// 연도
  const month = now.getMonth()+1;
  const date = now.getDate();
  const dayOfWeek = week[now.getDay()];
  const [timer, setTimer] = useState("00:00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()

  return (
    <>
      <h6 style={{color:"#fff",marginTop:"5px"}}>{year}<span>-</span>{month}<span>-</span>{date} ({dayOfWeek}) {timer}</h6>
    </>
  )
}

export default TodayAll;