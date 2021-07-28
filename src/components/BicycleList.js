import React from 'react';
import { useSelector } from 'react-redux';
import { Bicycle } from './Bicycle';

export const BicycleList = () => {
  const {bicycles} = useSelector(({bicycles}) => bicycles);
  console.log(bicycles);

  return (
    <div className="list">
      {
        bicycles.map(bicycle => <Bicycle bicycle={bicycle} key={bicycle.id} />)
      }
    </div>
  );
}