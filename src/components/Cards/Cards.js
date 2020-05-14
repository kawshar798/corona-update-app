import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Card.module.css';
import AppContainer from '../AppContainer';
import CountUp from 'react-countup';


const Cards = ({ data }) => {
    const { confirmed, recovered, deaths, lastUpdate } = data;
    const totalCases = confirmed.value;
    const deathCase = deaths.value;
    const recovaryCase = recovered.value;

    const deathCaseRate = (deathCase / totalCases * 100).toFixed(2);
    const recovaryCaseRate = (recovaryCase / totalCases * 100).toFixed(2);
    return (
        <AppContainer>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Confirmed</div>
                    <div className="card-body">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                        />


                    </div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Recovered</div>
                    <div className="card-body">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                        />
                    </div>
                    <div className="card-footer">
                    <CountUp
                            start={0}
                            end={recovaryCaseRate}
                            decimals={2}
                            duration={2.5}
                            
                        />%
                       </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Deaths</div>
                    <div className="card-body">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                        />
                    </div>
                    <div className="card-footer">
                    <CountUp
                            start={0}
                            end={deathCaseRate}
                            decimals={2}
                            duration={2.5}
                            
                        />%
                    </div>
                </div>
            </div>
        </AppContainer>

    );
};

export default Cards;