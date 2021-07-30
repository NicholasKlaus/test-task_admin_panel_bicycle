import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';

export const Statistics = ({bikes}) => {
  const { totalBikes, avaibleBikes, bookedBikes, averageBikeCost, bicycles } = bikes;
  const { avarageSum } = useContext(Context);
  
  function getPopularity(item) {
    return item.price;
  }

  function addScores(runningTotal, price) {
    return runningTotal + price;
  }

  useEffect(() => {
    const PriceScores = bicycles.map(getPopularity);
    const scoresTotal = PriceScores.reduce(addScores, 0);
    const averagePrice = scoresTotal / PriceScores.length;
    avarageSum(averagePrice);
  }, [bicycles])


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