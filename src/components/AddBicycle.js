import React, { useState } from 'react';

export const AddBicycle = ({addNewBike}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [wheelSize, setWheelSize] = useState('');
  const [price, setPrice] = useState('');
  const [id, setID] = useState('');
  const [text, setText] = useState('');

  const onCreate = (event) => {
    event.preventDefault();

    const newBicycle = {
      id: Date.now() + id ,
      name: name,
      type: type,
      color: color,
      wheelsize: wheelSize ,
      price: +price,
      description: text,
      status: "Available"
    }
    addNewBike(newBicycle);

    setName('');
    setType('');
    setColor('');
    setWheelSize('');
    setPrice('');
    setID('');
    setText('');
  }

  const Clear = (event) => {
    event.preventDefault();
    setName('');
    setType('');
    setColor('');
    setWheelSize('');
    setPrice('');
    setID('');
    setText('');
  }

  return (
    <form className="form" onSubmit={(event) => onCreate(event)} onReset={(event) => Clear(event)}>
      <input type="text" pattern="^[a-zA-Z]+$" minLength="5" required placeholder="Name" className="form-input"
        value={name} 
        onChange={event => setName(event.target.value)} 
      />
      <input type="text" pattern="^[a-zA-Z]+$" minLength="5" required placeholder="Type" className="form-input"
        value={type}
        onChange={event => setType(event.target.value)}
      />
      <input type="text" pattern="^[a-zA-Z]+$" minLength="5" required placeholder="Color" className="form-input" 
        value={color} 
        onChange={event => setColor(event.target.value)}
      />
      <input type="number" min="12" max="29" required placeholder="Wheel size" className="form-input" 
        value={wheelSize} 
        onChange={event => setWheelSize(event.target.value)}
      />
      <input type="number" min="0" required placeholder="Price" className="form-input" 
        value={price} 
        onChange={event => setPrice(event.target.value)}
      />
      <input type="number" min="0" required placeholder="ID (slug): XXXX" className="form-input" 
        value={id} 
        onChange={event => setID(event.target.value)}
      />
      <textarea type="text" minLength="5" required placeholder="Description" className="form-input form-textarea" 
        value={text} 
        onChange={event => setText(event.target.value)}
      />
      <div className="form-btn__wrap">
        <button className="form-btn btn-save" type="submit">Save</button>
        <button className="form-btn" type="reset">Clear</button>
      </div>
    </form>
  );
}