import React from 'react'
import { useState } from 'react'
// import { FaTrash} from 'react-icons/fa';

const Details = () => {
  const [wt, setwt] = useState();
  const [ht, setht] = useState();
  const [aget, setaget] = useState();
  const [gen, setgen] = useState();
  const [res, setres] = useState();
  const [fact, setfact] = useState();
  let mbmr = (88.362 + (13.397) * wt + (4.799 * ht) - (5.677 * aget)) * fact;
  let wbmr = (447.593 + (9.247 * wt) + (3.098 * ht) - (4.330 * aget)) * fact;
  const handleClick = (e) => {
    e.preventDefault();
    if (gen === "Men") {
      setres(mbmr);
    } else {
      setres(wbmr);
    }
  }
  return (
    <div>
      <input type="number" value={wt} className="btn" onChange={(e) => { setwt(e.target.value) }} placeholder="Weight in Kg" />
      <input type="number" value={ht} className="btn" onChange={(e) => { setht(e.target.value) }} placeholder="Height in cm" />
      <input type="number" value={aget} className="btn" onChange={(e) => { setaget(e.target.value) }} placeholder="Age in years" />
      <select id="gen" onChange={(e) => { setgen(e.target.value) }}>
        <option value={"Men"}>Men</option>
        <option value={"Women"}>Women</option>
      </select>
      <select id="fact" onChange={(e) => { setfact(e.target.value) }}>
        <option value={0}>Set Value</option>
        <option value={1.2}>sedentary</option>
        <option value={1.375}> light</option>
        <option value={1.55}>Moderate</option>
        <option value={1.725}> heavy </option>
      </select>
      <button type="submit" value={1} className="button-85" onClick={handleClick}>Submit</button>
      <div>{res}</div>
    </div>
  )
}

export default Details;


