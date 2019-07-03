import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as PageRouter, Route } from 'react-router-dom';

import {LineChart} from './pages/lineChart';

const IChartsDemo = () => {
    return (
        <div>
            <div className="menu">
                <ul>
                    <li>折线图</li>
                </ul>
            </div>
            <div className="content">
                <PageRouter>
                    <div className="evaluation-home-page">
                        <Route exact path="/linechart" component={LineChart} />
                    </div>
                </PageRouter>
            </div>
        </div>
    );
};

ReactDOM.render(
    <IChartsDemo />,
    document.body
);