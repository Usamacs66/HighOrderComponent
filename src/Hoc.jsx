import { useCallback, useState } from "react"

const Hoc = (OrigionalComponent)=>{
    
    return (props) => {
        const [count,setCount] = useState(0);

        const increment = useCallback(()=>{
            setCount(count => count+1);
        },count)
        
        return(
            <OrigionalComponent count={count} increment = {increment} />
        )
    }

}

export default Hoc