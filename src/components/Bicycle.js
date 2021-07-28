import React, { useState } from 'react';

export const Bicycle = ({bicycle}) => {
  const [status, setStatus] = useState('Available');

  return (
    <div className={ status === "Available" ? "bicycle-wrap Available": status === "Busy" ? "bicycle-wrap Busy" : "bicycle-wrap Unavailable"}>
      <div className="bicycle-info">
        <div>
          <div>
            <span className="info info-name">{bicycle.name}</span>
            <span>-</span>
            <span className="info">{bicycle.type}</span>
            <span className="info">({bicycle.color})</span>
          </div>
          <span className="info info-id">ID: {bicycle.id}</span>
        </div>
        <div className="status-info__wrap">
          <span className="info">STATUS:</span>
          <select onChange={(event) => setStatus(event.target.value)}>
            <option>Available</option>
            <option>Busy</option>
            <option>Unavailable</option>
          </select>
        </div>
      </div>
      <div className="bicycle-price">
        <button className="btn-remove"></button>
        <h3>{bicycle.price} UAH/hr.</h3>
      </div>
    </div>
  )
}