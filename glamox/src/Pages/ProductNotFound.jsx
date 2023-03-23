import React from 'react'

const ProductNotFound = () => {
  return (
    <div style={{width:"100%",margin:"auto",display:"grid",alignItems:"center",marginTop:"1rem"}}>
        <img style={{width:"30%",marginLeft:"35%"}} src="https://img.freepik.com/free-vector/hand-drawn-shrug-illustration_23-2149318018.jpg?w=740&t=st=1679567716~exp=1679568316~hmac=3f0c067a4aa90e902370a11ac3923a5ef96bc72ed5267bbe08735fec12dc1c8f" alt="" />
        <h1 style={{color:"#fc2779",fontWeight:"bold",fontSize:"30px"}}>Sorry, no results found!</h1>
        <p style={{color:"grey"}}>Please check the spelling or try searching for something else</p>
    </div>
  )
}

export default ProductNotFound

