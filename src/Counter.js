import React, {useState} from 'react';
const Counter =()=>{
    const [value, setValue] = useState(0);
    const color = 'green';
    const countUp = ()=>{
        setValue(value+1);
    }

    return(
        <div>
            <p>
                The current value of counter is <b color={color}>{value}</b>.
            </p>
            <button onClick={countUp}> +1</button>
            <button color={color} onClick={()=> setValue(value-1)}> -1</button>
        </div>
    );
};

export default Counter;