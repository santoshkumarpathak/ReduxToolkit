import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CommonInputReducerChildA, CommonInputReducerChildB } from '../../redux/commonInput'
import { useSelector } from 'react-redux'
const CommonInput = (props) => {
    const dispatch = useDispatch();
    const selectorA = useSelector(state => state.CommonInput.childAInputValue)
    const selectorB = useSelector(state => state.CommonInput.childBInputValue)
    const [input, setInput] = useState("")

    useEffect(() => {
        if (props?.isChild === "childA") {
            dispatch(CommonInputReducerChildA(input))

        }
        if (props?.isChild === "childB") {
            dispatch(CommonInputReducerChildB(input))
        }

    }, [input])


    useEffect(() => {
        if (selectorA && props?.isChild === "childA") {
            setInput(selectorA)
        }
        if (selectorB && props?.isChild === "childB") {
            setInput(selectorB)
        }
    }, [selectorA, selectorB])

    return (
        <>
            <input
                onChange={(e) => { setInput(e.target.value) }}
                value={input} placeholder={props.isChild} ></input>
        </>
    )
}

export default CommonInput