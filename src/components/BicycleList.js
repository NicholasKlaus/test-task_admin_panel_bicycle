import React from 'react';
import { Bicycle } from './Bicycle';

export const BicycleList = ({bikes}) => {
 
  return (
    <div className="list">
      {
        bikes.bicycles.map((bicycle, key) => <Bicycle bicycle={bicycle} key={key} />)
      }
    </div>
  );
}