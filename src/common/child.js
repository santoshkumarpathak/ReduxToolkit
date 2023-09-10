import React from 'react'
import ChildA from './subChild/childA'
import ChildB from './subChild/childB'

const Child = () => {
    return (
        <>
            <div>Child</div>

            <div className='row'>
                <div className='col-6'>
                    <ChildA></ChildA>
                </div>
                <div className='col-6'>
                    <ChildB></ChildB>

                </div>
            </div>
        </>
    )
}

export default Child