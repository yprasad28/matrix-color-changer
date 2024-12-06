import React, { useState } from 'react'

import "./Matrix.css"


const Matrix = () => {
    const [matrix,setMatrix] = useState(Array(9).fill(null));
    const [color,setColor] = useState([])

    const handleClick = (index) => {
        if (matrix[index] === null) {
            const newMatrix = [...matrix]
            newMatrix[index] = "green"
            setMatrix(newMatrix)
            setColor([...color,index])

            if(color.length === 8){
                setTimeout(() => {
                    const newMatrixOrange = Array(9).fill("orange") //after clicked 8 times on grid then change color with setTimeout.
                    setMatrix(newMatrixOrange)
                },1000)
            }
        }
    }

    return (
        <div className='container'>
            <h1>Matrix Color Changer</h1>
    
    <div className='matrix'>
        
        {matrix.map((colors,index) => (
            <div key={index} className='box'  onClick={() => handleClick(index)} style={{backgroundColor: colors}}></div> //event click triggered to change color
        ))}
    </div>

    </div>
    )
    
}

export default Matrix;