import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [myArray, setmyArray] = useState(localStorage.UserData ? JSON.parse(localStorage.UserData) : [{ userName: '', userAge: '' }]);


  // add data to local Storage
  useEffect(() => {
    localStorage.setItem('UserData', JSON.stringify(myArray))

  }, [myArray])


  // Add myArray in Array
  const submitData = () => {

    setmyArray([...myArray, ...[{ userName: '', userAge: '' }]]);


  };

  const onChangeInput = (ind, event) => {
    myArray[ind][event.target.name] = event.target.value
    setmyArray([...myArray])
  }
  //delet Row data
  const deleteItem = (id) => {
    console.log(id)
    const removeData = myArray.filter((element, index) => {
      return index !== id;

    })
    setmyArray(removeData)
    console.log(removeData)
  };

  const clearAll = () => {
    localStorage.clear();
    setmyArray([{ userName: '', userAge: '' }]);
  }

  return (
    <>
      <div>
        {console.log('myArray', myArray)}
        {myArray.map((Element, index) => {
          return (
            <div key={index}>
              <input type="text" name="userName" placeholder="Name" value={myArray[index].userName} onChange={(e) => onChangeInput(index, e)} />
              <input type="number" name="userAge" placeholder="Age" value={myArray[index].userAge} onChange={(e) => onChangeInput(index, e)} />
              {index > 0 && <button onClick={() => deleteItem(index)} >delete</button>}
            </div>
          );


        })}
      </div>
      <div>
        <button onClick={submitData}>SUBMIT</button>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </>
  )



}

export default App;