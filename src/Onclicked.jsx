import { useState } from "react";
import Hoc from './Hoc'
const onClicked = ({count,increment})=>{

   return (
    <>
        onClicked state {count}
        <button onClick={increment}>onClicked button</button>
    </>
   )
}

export default Hoc(onClicked);