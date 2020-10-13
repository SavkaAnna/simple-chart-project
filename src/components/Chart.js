import React from 'react';
import Menu from './Menu'

function Chart({data}){

  let dashOfSet = 0;
  let colorsOfElemnts = getArrayOfColors();
  let total = getTotalValue();
  
  var numberFixer = function(num){
    var result = ((num * 100) / total);
    return result;
  }

  function getPropertyOfData(){
    var newEl = []
    for(let property in data){
      newEl.push(property);
    }
    return newEl;
  }

  function getTotalValue(){
    var sumOfValue = 0;
    for(let property in data){
      sumOfValue += Number(data[property]);
    }
    return sumOfValue;
  }

  var setPieChart = function(name){
    var number = data[name],
        fixedNumber = numberFixer(number),
        result = fixedNumber + '% ' + '100%';
    dashOfSet -= fixedNumber;
    return result;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getArrayOfColors() {
    let colors = {};
    for( let property in data){
      colors[property] = getRandomColor();
    }
    return colors;
  }


    return(
        <>
        <Menu />
            <figure>
            <div className="buttons">
                {getPropertyOfData().map(el=> <button color={colorsOfElemnts[el]}>{el}</button>)}
            </div>
            <svg className="chart" width="600" height="600" viewBox="0 0 100 100">
                {getPropertyOfData().map(el => 
                  <circle className="pie" 
                          stroke={colorsOfElemnts[el]} 
                          fill="none" 
                          strokeDashoffset={dashOfSet + '%'}
                          strokeDasharray={setPieChart(el)}
                   />
                )}
                
            </svg>
            </figure>
        </>
    )
};

export default Chart;
