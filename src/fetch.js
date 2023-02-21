import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pie from './Compo/Pie';

const Fetch = (props) => {
    const [calory, setCalory] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [arr, setArr] = useState([]);

    const fetchData = async (str) => {

        axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=852afcaf&app_key=21f205003fcf45bfe3cd7ce2d0f4ce07&ingr=${str}&nutrition-type=cooking`)
            .then(function (response) {
                setCalory(response.data.hints[0].food.nutrients.ENERC_KCAL)
                setFat(response.data.hints[0].food.nutrients.FAT)
                setProtein(response.data.hints[0].food.nutrients.PROCNT)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        const b = {
            ca: calory,
            fa: fat,
            pro:protein,
            name:props.data,
        }
        console.log(b);
        if (b.ca !== '') {
            const aam = [b, ...arr];
            setArr(aam);
            console.log(arr);
        }
    }, [protein]);
    return (
        <div>
            <h2>Fetched data {calory}</h2>
            <button
                type="submit"
                value={1}
                className="button-85"
                onClick={() => {
                    fetchData(props.data);
                }}
            >
                Submit
            </button>
            <div>{props.data}</div>
            {/* <Pie data={calory} fat={fat} protein={protein} /> */}
            <div>
                {
                    arr.map(
                        (e, i) => {
                            return (
                                <div>
                                 <Pie data={e.ca} fat={e.fa} protein={e.pro} name={e.name} />
                                </div>
                            )
                        }
                    )}

            </div>
        </div>
    );
};

export default Fetch;
