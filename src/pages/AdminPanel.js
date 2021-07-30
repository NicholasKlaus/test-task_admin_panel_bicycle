import React, { useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { 
  AddBicycle,
  BicycleList,
  Statistics,
  Header,
  Footer
} from '../components/index';
import localforage from 'localforage';

export const AdminPanel = () => {
  localforage.config({
    driver: localforage.LOCALSTORAGE,
    name: 'Bicycles'
  });
  const [bikesData, setBikesData] = useState({
    bicycles: [
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
    ],
    totalBikes: 3,
    avaibleBikes:3,
    bookedBikes:0,
    averageBikeCost:0,
  })

  const addNewBike = (data) => {
    setBikesData({
      ...bikesData,
      bicycles: [...bikesData.bicycles, data],
      totalBikes: bikesData.totalBikes + 1,
      avaibleBikes: bikesData.avaibleBikes + 1
    });
  }

  const removeAvailableBicycle = (id) => {
    setBikesData({
      bicycles: [...bikesData.bicycles.filter(bicycle => bicycle.id !== id)],
      totalBikes: bikesData.totalBikes - 1,
      avaibleBikes: bikesData.avaibleBikes - 1
    })
  }

  const removeBusyBicycle = (id) => {
    setBikesData({
      ...bikesData,
      bicycles: [...bikesData.bicycles.filter(bicycle => bicycle.id !== id)],
      totalBikes: bikesData.totalBikes - 1,
      bookedBikes: bikesData.bookedBikes -1,
    })
  }

  const removeUnavailableBicycle = (id) => {
    setBikesData({
      ...bikesData,
      bicycles: [...bikesData.bicycles.filter(bicycle => bicycle.id !== id)],
      totalBikes: bikesData.totalBikes - 1,
    })
  }

  const averageBikePrice = (num) => {
    setBikesData({
      ...bikesData,
      averageBikeCost: num
    })
  }

  const statusAvailableToBusy = (id) => {
    setBikesData({
      ...bikesData,
      bicycles: [...bikesData.bicycles.filter(el => el.id === id ? el.status = "Busy": el.status)],
      avaibleBikes: bikesData.avaibleBikes - 1,
      bookedBikes: bikesData.bookedBikes + 1
    })
  }

  const statusAvailableToUnavailable = (id) => {
    setBikesData({
      ...bikesData,
        bicycles: [...bikesData.bicycles.filter(el => el.id === id ? el.status = "Unavailable": el.status)],
        avaibleBikes: bikesData.avaibleBikes - 1,
    })
  }

  const statusBusyToAvailable = (id) => {
    setBikesData({
      ...bikesData,
      bicycles: [...bikesData.bicycles.filter(el => el.id === id ? el.status = "Available": el.status)],
      bookedBikes: bikesData.bookedBikes - 1,
      avaibleBikes: bikesData.avaibleBikes + 1
    })
  }

  const statusBusyToUnavailable = (id) => {
    setBikesData({
      ...bikesData,
      bicycles: [...bikesData.bicycles.filter(el => el.id === id ? el.status = "Unavailable": el.status)],
      bookedBikes: bikesData.bookedBikes - 1,
    })
  }

  const statusUnavailableToAvailable = (id) => {
    setBikesData({
      ...bikesData,
      bicycles: [...bikesData.bicycles.filter(el => el.id === id ? el.status = "Available": el.status)],
      avaibleBikes: bikesData.avaibleBikes + 1
    })
  }

  const statusUnavailableToBusy = (id) => {
    setBikesData({
      ...bikesData,
      bicycles: [...bikesData.bicycles.filter(el => el.id === id ? el.status = "Busy": el.status)],
      bookedBikes: bikesData.bookedBikes + 1
    })
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
          delAvailableItem: removeAvailableBicycle,
          delBusyItem: removeBusyBicycle,
          delUnavailableItem: removeUnavailableBicycle,
          avarageSum: averageBikePrice,
          switchStatusFromAvailableToBusy: statusAvailableToBusy,
          switchStatusFromAvailableToUnavailable: statusAvailableToUnavailable,
          switchStatusFromBusyToAvailable: statusBusyToAvailable,
          switchStatusFromBusyToUnavailable: statusBusyToUnavailable,
          switchStatusFromUnavailableToAvailable: statusUnavailableToAvailable,
          switchStatusFromUnavailableToBusy: statusUnavailableToBusy,
        }
      }>
        <div className="row">
          <div className="col-7 divider-y">
            <BicycleList bikes={bikesData}/>
          </div>
          <div className="col-5">
            <div className="row">
              <AddBicycle addNewBike={addNewBike}/>
            </div>
            <div className="row">
              <Statistics bikes={bikesData} />
            </div>
          </div>  
        </div>
      </Context.Provider>
    </div>
  );
}