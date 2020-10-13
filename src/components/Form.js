import React, { useEffect, useState } from 'react';
import Chart from './Chart'
import Menu from './Menu'
import {Data} from '../data/data'

function Input(props){
    const [Name, setName] = useState('');
    const [Value, setValue] = useState(0);
    
    useEffect(()=>{
        Data[props.index] = {Name: `${Name}`, Value: `${Value}`};
    })

    async function onChangeInputName(event){
        const input = event.target.value;
        await setName(Name => input);
    }

    async function onChangeInputValue(event){
        const input = event.target.value;
        await setValue(input);
    }

    return (
    <>
    <form>
        <input 
            type='text'
            value={Name}
            onChange={onChangeInputName}
            />
        <input 
            type='text'
            value={Value}
            onChange={onChangeInputValue}
            />
    </form>
    </>)
}

function Form() {
    const [Inputs, setInputs] = useState([<Input key={0} index={0}/>]);

    const onClickPluss = () => {
        setInputs(Inputs => [...Inputs, <Input key={Inputs.length} index={Inputs.length}/>])
    }

    return (
    <>
        <Menu />
        {Inputs.map(input => <div key={input.key}>{input}</div>)}
        <button className="addInputs" onClick={onClickPluss}>Добавить позицию</button>
       
    </>
    )
}

export default Form;