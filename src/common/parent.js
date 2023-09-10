import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { CommonInputReducer } from '../redux/commonInput'
import { useSelector } from 'react-redux';
const Parent = () => {
    const dispatch = useDispatch();
    const select = useSelector((state) => state.CommonInput.value);
    const [name, setName] = useState("")
    useEffect(() => {
        setName(select)
    }, [select])

    return (
        <>
            <div>Psarent</div>
            <input
                onChange={(e) => {
                    dispatch(CommonInputReducer(e.target.value));
                }}
                value={name}
            ></input>

            {name}
        </>

    )
}

export default Parent