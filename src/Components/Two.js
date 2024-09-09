import React,{useContext} from 'react'
import { appContext } from '../appContext'

function Two(props) {
    const {data} = useContext(appContext)
  return (
    <div style={{backgroundColor:'red', width:'200px'}}>
        <h1>Layer Two ...displaying {data}</h1>
    </div>
  )
}

export default Two