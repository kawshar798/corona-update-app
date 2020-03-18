import React,{useState,useEffect } from 'react';
import Single from './Single';

const TotalCase = (props) => {
    const { data } = props;
    return (
        <div className="row mt-5">
          <div className="col-4">
              <div className="card text-center p-5 bg-primary text-white">
              <h2>{data.confirmed.value}</h2>
              <h4>TOTAL CASES</h4>
              </div>
             
          </div>
          <div className="col-4">
          <div className="card text-center p-5 bg-danger text-white">
          <h2>{data.deaths.value}</h2>
              <h4>DECEASED</h4>
          </div>
             
          </div>

          <div className="col-4">
          <div className="card text-center p-5 bg-success text-white">
          <h2>{data.recovered.value}</h2>
              <h4>RECOVERED</h4>
          </div>
          </div>

        </div>
    );
  
};


export default TotalCase;