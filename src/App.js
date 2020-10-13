import React from 'react';
import echarts from 'echarts'
import Form from '../src/components/Form'
import Chart from '../src/components/Chart'
import {HashRouter,Route} from 'react-router-dom';
import {getData} from './data/data';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Route path="/form" component={Form} />
        <Route path="/chart" render={(props) => (<Chart {...props} data={getData()}/> )}/>
        </HashRouter>
    </div>
  );
}

export default App;
