import React from 'react'

const Column = (props) => {
    return (
        <div className={`col c-${props.c} m-${props.m} l-${props.l}`}>
            {props.children}
        </div>
    )
}

export default Column
