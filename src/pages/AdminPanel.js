import React, { useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { 
  AddBicycle,
  BicycleList,
  Statistics
} from '../components/index';
import localforage from 'localforage';

export const AdminPanel = () => {
  localforage.config({
    driver: localforage.LOCALSTORAGE,
    name: 'Bicycles'
  });
  const [bikesData, setBikesData] = useState(
    [
      {
        id: 1,
        name: "bicycle Suv",
        type: "mountine bicycle",
        color: "red",
        wheelsize: 16,
        price: 345,
        description: "lorem askmfmdofmodfmoermcorem",
        status: "Available"
      },
      {
        id: 2,
        name: "bicycle Suv++",
        type: "mountine bicycle",
        color: "blue",
        wheelsize: 17,
        price: 545,
        description: "loremrtwtrfewf askmfmdofmodfmoermcorem",
        status: "Available"
      },
      {
        id: 3,
        name: "bicycle BMX",
        type: "sport bicycle",
        color: "green",
        wheelsize: 18,
        price: 745,
        description: "loremdsadsadasdasdasd askmfmdofmodfmoermcorem",
        status: "Available"
      }
    ]
  )

  const addNewBike = (data) => {
    setBikesData([...bikesData, data]);
  }

  const removeBicycle = (id) => {
    setBikesData(bikesData.filter(bicycle => bicycle.id !== id));
  }

  const toggleStatus = (id, status) => {
    setBikesData(bikesData.filter(el => el.id === id ? el.status = status : el.status));
  }

  function saveData (key, data) {
    localforage.setItem(key, data);
  }

  async function  getData (key) {
    const value = await localforage.getItem(key);
    setBikesData(value);
  }

  useEffect(() => {
    saveData("Bikes", bikesData);
  }, [bikesData])

  useEffect(() => {
    getData("Bikes");
  }, [])

  return (
    <div className="panel">
      <Context.Provider value={
        {
          delItem: removeBicycle,
          changeStatus:toggleStatus,
        }
      }>
        <div className="row">
          <div className="col-7 divider-y">
            <BicycleList bikes = { bikesData } />
          </div>
          <div className="col-5">
            <div className="row">
              <AddBicycle addNewBike = { addNewBike } />
            </div>
            <div className="row">
              <Statistics bikes = { bikesData } />
            </div>
          </div>  
        </div>
      </Context.Provider>
    </div>
  );
}