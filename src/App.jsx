import { useLoaderData } from 'react-router-dom';
import './App.css';
import Coffee from './copmonents/Coffee';
import { useState } from 'react';

function App() {
  let loadedCoffees = useLoaderData();
  let [ coffees, setCoffees ] = useState(loadedCoffees);

  return (
    <>
      <h1>We have {coffees.length} types of coffees</h1>
      <div className='grid md:grid-cols-2 gap-8 m-10'>
        {
          coffees.map(coffee => <Coffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></Coffee>)
        }
      </div>
    </>
  )
}

export default App
