import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';

export const Bicycle = ({bicycle}) => {
  const [status, setStatus] = useState('Available');
  const { 
    delAvailableItem,
    delBusyItem, 
    delUnavailableItem,
    switchStatusFromAvailableToBusy,
    switchStatusFromAvailableToUnavailable,
    switchStatusFromBusyToAvailable,
    switchStatusFromBusyToUnavailable,
    switchStatusFromUnavailableToAvailable,
    switchStatusFromUnavailableToBusy
  } = useContext(Context);

  const delBicycle = () => {
    if(bicycle.status === "Available") {
      delAvailableItem(bicycle.id);
    }
    if (bicycle.status === "Busy") {
      delBusyItem(bicycle.id);
    }
    if (bicycle.status === "Unavailable") {
      delUnavailableItem(bicycle.id);
    }
  }

  useEffect(() => {
    if (bicycle.status === "Available" && status === "Busy") {
      switchStatusFromAvailableToBusy(bicycle.id);
    }
    if (bicycle.status === "Available" && status === "Unavailable") {
      switchStatusFromAvailableToUnavailable(bicycle.id);
    }
    if (bicycle.status === "Busy" && status === "Available") {
      switchStatusFromBusyToAvailable(bicycle.id);
    }
    if (bicycle.status === "Busy" && status === "Unavailable") {
      switchStatusFromBusyToUnavailable(bicycle.id);
    }
    if (bicycle.status === "Unavailable" && status === "Available") {
      switchStatusFromUnavailableToAvailable(bicycle.id);
    }
    if (bicycle.status === "Unavailable" && status === "Busy") {
      switchStatusFromUnavailableToBusy(bicycle.id);
    }
  }, [bicycle.status, bicycle.id, status])

  return (
    <div className={ status === "Available" ? "bicycle-wrap Available": status === "Busy" ? "bicycle-wrap Busy" : status === "Unavailable" ? "bicycle-wrap Unavailable" : "bicycle-wrap Available"}>
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