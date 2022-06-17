import React, { useEffect, useState} from "react";


function App(){
    const [tag , setTag]=useState(
        <p>Loading..... </p>
    )

    useEffect(()=>
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res)=> res.json())
            .then((data)=> setTag(
                
                <img src={data.message} alt="A Random Dog"></img>
            ))
    ,[])

        return(
            <div>
              {tag}  
            </div>
    )

}

export default App;