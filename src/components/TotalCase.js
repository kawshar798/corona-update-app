import React,{useState,useEffect } from 'react';
import Single from './Single';

const TotalCase = (props) => {
    const { data } = props;

     const totalCases = data.confirmed.value;
     const deathCase  = data.deaths.value;
     const recovaryCase = data.recovered.value;

     const deathCaseRate = (deathCase / totalCases * 100).toFixed(2);
     const recovaryCaseRate = (recovaryCase / totalCases * 100).toFixed(2);
    
    return (
        <div className="row mt-5">
          <div className="col-3">
              <div className="card text-center p-5 bg-primary text-white">
              <h2>{totalCases}</h2>
              <h4>TOTAL CASES</h4>
              </div>
             
          </div>
          <div className="col-3">
          <div className="card text-center p-5 bg-danger text-white">
          <h2>{deathCase}</h2>
              <h4>DECEASED</h4>
          </div>
             
          </div>

          <div className="col-3">
          <div className="card text-center p-5 bg-success text-white">
          <h2>{recovaryCase}</h2>
              <h4>RECOVERED</h4>
          </div>
          </div>

          <div className="col-3">
          <div className="card text-center p-5 bg-success text-white">
          <h2>{deathCaseRate}%</h2>
              <h4>DECEASED Rate</h4>
          </div>
          </div>

          <div className="col-3">
          <div className="card text-center p-5 bg-success text-white">
          <h2>{recovaryCaseRate}%</h2>
              <h4>RECOVERY RATE</h4>
          </div>
          </div>


        </div>
    );
  
};


export default TotalCase;