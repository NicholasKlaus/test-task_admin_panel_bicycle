import React, { useEffect, useState } from 'react';

export const Statistics = ({bikes}) => {
  const [averageBikeCost, setAverageBikeCost] = useState(0);
  const [totalBikes, setTotalBikes] = useState(0);
  const [bookedBikes, setBookedBikes] = useState(0);
  const [avaibleBikes, setAvaibleBikes] = useState(0);

  function getStatus(item) {
    return item.status;
  }
  
  function getPopularity(item) {
    return item.price;
  }

  function addScores(runningTotal, price) {
    return runningTotal + price;
  }

  useEffect(() => {
    const arrStatus = bikes.map(getStatus);
    const statusAvailable = arrStatus.filter(el => el === "Available");
    const statusBusy = arrStatus.filter(el => el === "Busy");
    const PriceScores = bikes.map(getPopularity);
    const scoresTotal = PriceScores.reduce(addScores, 0);
    setAverageBikeCost(scoresTotal / PriceScores.length);
    setTotalBikes(bikes.length);
    setAvaibleBikes(statusAvailable.length);
    setBookedBikes(statusBusy.length);
  }, [bikes])


  return (
    <div className="statistics divider-x">
      <h4 className="statistics-title">STATISTICS</h4>
      <div className="statistics-wrap">
      <span>Total Bikes: {totalBikes} </span>
      <span>Available Bikes: {avaibleBikes} </span>
      <span>Booked Bikes: {bookedBikes} </span>
      <span>Average bike cost: {averageBikeCost} UAH/hr.</span>
      </div>
    </div>
  );
}