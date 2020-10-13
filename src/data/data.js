export let Data = [];

export const getData = () => {
    let newData = {};
    for(let i = 0; i<Data.length; i++){
        let property = Data[i]['Name'];
        let value = Data[i]['Value'];
        newData[property] = value;
    }
    return newData;
}