import React from 'react'
import CommonInput from './commonInput'
import { useSelector } from 'react-redux'
const ChildA = () => {

    const parentselector = useSelector(state => state.CommonInput.value)

    return (
        <>
            <div>ChildA</div>
            <CommonInput isChild={"childA"}></CommonInput>
            parent data by redux update ======  { parentselector}
        </>
    )
}

export default ChildA