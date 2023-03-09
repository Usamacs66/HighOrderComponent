import { useState } from "react";
import Hoc from "./Hoc";

const Onhovered = ({count,increment})=>{
   return (
    <>
        onhover state {count}
        <button onMouseOver={increment}>onhover button</button>
    </>
   )
}

export default Hoc(Onhovered);