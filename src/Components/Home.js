import React from 'react'

const Home =()=>{
    return(
        <div style={{textAlign:"center"}}>
             <h2>Welcome to Our Site</h2>
            <a>Click <a href={'/places'}>Places</a> to explore the list of places</a>
        </div>
    )
}

export default Home;