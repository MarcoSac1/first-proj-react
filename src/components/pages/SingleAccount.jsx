import React from 'react'
import { useParams } from 'react-router-dom'


function SingleAccount() {
  const parametri = useParams();
  console.log(parametri)
  
  return (
    <div>
        <h1>
        Questo è l'accound di: {parametri.name},
        </h1>
    </div>
  )
}

export default SingleAccount