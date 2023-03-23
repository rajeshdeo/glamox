import React from 'react'
import { useParams } from 'react-router-dom';

const UseParamsCstm = () => {

    // const params = useParams();
    const {category} = useParams();
    console.log(category)

  return (
    <div>UseParamsCstm</div>
  )
}

export default UseParamsCstm