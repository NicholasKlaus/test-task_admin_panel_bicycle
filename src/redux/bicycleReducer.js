

const initialState = {
  bicycles: [
    {
      id: 1,
      name: "bicycle Suv",
      type: "mountine bicycle",
      color: "red",
      wheelsize: 16,
      price: 345,
      description: "lorem askmfmdofmodfmoermcorem"
    },
    {
      id: 2,
      name: "bicycle Suv++",
      type: "mountine bicycle",
      color: "blue",
      wheelsize: 17,
      price: 545,
      description: "loremrtwtrfewf askmfmdofmodfmoermcorem"
    },
    {
      id: 3,
      name: "bicycle BMX",
      type: "sport bicycle",
      color: "green",
      wheelsize: 18,
      price: 745,
      description: "loremdsadsadasdasdasd askmfmdofmodfmoermcorem"
    }
  ]
}

export const bicycleReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}