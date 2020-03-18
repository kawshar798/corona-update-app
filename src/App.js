import React,{ useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TotalCase from './components/TotalCase';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
       fetch("https://covid19.mathdro.id/api")
        .then(res => res.json()).then( data=>setData(data))
        .catch(err => {
        console.log(err)
        });

  }, []);

  if (!data) {
    return <div>Loading...</div>
  }
  return (
    
    <div className="container">{
      <TotalCase data={ data } />

    }

    </div>
  );
}

export default App;

