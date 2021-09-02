import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';

export const Bicycle = ({bicycle}) => {
  const [status, setStatus] = useState('Available');
  const { changeStatus, delItem } = useContext(Context);

  const delBicycle = () => {
    delItem(bicycle.id);
  }

  useEffect(() => {
    changeStatus(bicycle.id, status);
  }, [bicycle.id, status])

  return (
    <div className={ bicycle.status === "Available" ? "bicycle-wrap Available": bicycle.status === "Busy" ? "bicycle-wrap Busy" : bicycle.status === "Unavailable" ? "bicycle-wrap Unavailable" : "bicycle-wrap Available"}>
      <div className="bicycle-info">
        <div>
          <div>
            <span className="info info-name"> {bicycle.name} </span>
            <span>-</span>
            <span className="info"> {bicycle.type} </span>
            <span className="info"> ({bicycle.color}) </span>
          </div>
          <span className="info info-id">ID: {bicycle.id} </span>
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
        <button className="btn-remove" onClick={() => delBicycle()}><i className="icofont-close"></i></button>
        <h3> {bicycle.price} UAH/hr.</h3>
      </div>
    </div>
  )
}