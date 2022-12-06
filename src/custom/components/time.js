import React, { useState } from 'react'

function TodayAll () {
  const now = new Date();	// 현재 날짜 및 시간
  const year = now.getFullYear();	// 연도
  const month = now.getMonth();
  const date = now.getDate();
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
      <h6 style={{color:"#fff"}}>{year}<span>-</span>{month}<span>-</span>{date} {timer}</h6>
    </>
  )
}

export default TodayAll;