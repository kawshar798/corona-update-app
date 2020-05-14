import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Cards, Chart, Country } from './components';
import { fetchData } from './api';
import AppContainer from './components/AppContainer';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData().then(res => setData(res.data)).catch(err => console.log(err));

  }, []);


  if (!data) {
    return <div>Loading...</div>
  }
  console.log(data);
  return (
    <AppContainer>
      <div className="col-12">
        <h2>Corona Update</h2>
        <Cards data={data} />
        <Country />
        <Chart />
      </div>

    </AppContainer>
  );
}

export default App;

