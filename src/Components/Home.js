import React from 'react'

const Home =()=>{
    return(
        <div style={{textAlign:"center"}}>
             <h2>Welcome to Our Site</h2>
            <p>Click <a href={'/places'}>Places</a> to explore the list of places</p>
        </div>
    )
}

export default Home;