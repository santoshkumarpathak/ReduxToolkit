import React from 'react'
import CommonInput from './commonInput'
import { useSelector } from 'react-redux'

const ChildB = () => {
    const parentselector = useSelector(state => state.CommonInput.value)

  return (
    <>
    <div>ChildB</div>
    <CommonInput isChild={"childB"}></CommonInput>
    parent data by redux update ======  { parentselector}
    </>
  )
}

export default ChildB