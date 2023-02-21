

import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Pie from './Compo/Pie'
const Fetch = (props) => {
    const [calory, setcalory] = useState("");
    const [fat, setfat] = useState("");
    const [protein, setprotein] = useState("");
    const dat = async (str) => {
        try {
            const data = await axios
                .get(


                    `https://api.edamam.com/api/food-database/v2/parser?app_id=852afcaf&app_key=21f205003fcf45bfe3cd7ce2d0f4ce07&ingr=${str}&nutrition-type=cooking`
                    // configuration

                )
            setcalory(data.data.hints[0].food.nutrients.ENERC_KCAL)
            setfat(data.data.hints[0].food.nutrients.FAT)
            setprotein(data.data.hints[0].food.nutrients.PROCNT)
        }
        catch (e) {
            console.log("nhi ho rha bro");
            setcalory("idiot!!")
        }
    }
    useEffect(() => {
        dat();
    }, []);


    return (
        <div>
            fetched data {calory}
            <button type="submit" value={1} className="button-85" onClick={() => { dat(props.data) }}>Submit</button>
            <div>{props.data}</div>
            <Pie data={calory} fat={fat} protein={protein}/>
        </div>
    )
}

export default Fetch
