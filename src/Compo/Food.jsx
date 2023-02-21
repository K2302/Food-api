import React from 'react'
import { useState } from 'react';
import Fetch from '../fetch';

const Food = () => {
    const [data, setdata] = useState(0);
    const [arr, setarr] = useState();
    const handleClick = (e) => {
        e.preventDefault();
        setdata(e.target.value);
        //let a = [...arrr]
        const b = [data, ...arr];
        setarr(b);
    }
    return (
        <div>
            <input type="text" placeholder='Foodname' value={data} onChange={(e) => { setdata(e.target.value) }}></input>
            {/* <button type='submit' className='button-81' onClick={handleClick}>Submit</button> */}
            <Fetch data={data}></Fetch>
        </div>
    )
}

export default Food
