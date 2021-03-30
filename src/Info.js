import React, {useEffect, useState} from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    const onChangeName =e=>{
        setName(e.target.value);
    }
    const onChangeNickName =e=>{
        setNickName(e.target.value);
    }

    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return()=>{
            console.log('clean up');
            console.log(name);
        };
        
    }, []);



    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickName} onChange={onChangeNickName}/>
            </div>
            <div>
                <div>
                    <b>name: </b> {name}
                </div>
                <div>
                    <b>nickname: </b> {nickName}
                </div>
            </div>
        </div>
    );
};

export default Info;