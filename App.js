import React from "react";
import ReactDOM from "react-dom/client";

//Creating the Header Component
const HeaderComponent=()=>{
    return(
        <div className="Header">

            <a href="/"><img  className="nav-logo" src="https://play-lh.googleusercontent.com/iwGG0ojU1j43ZEEGiibNmLqd4Ha6eRtAjFlG2WE7uV8vUZTsrP1GDRwvA_aPJghkCqc=w480-h960-rw"></img> </a>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const Cards=[
    {
    name:"KFC",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
    rating:"4.3",
    cuisines:["Burger","American"]
   },

   {
    name:"Sauces",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6684d5f10aa972de3df479f67cdcf5a9",
    raging:"3.8",
    cuisines:["Fast Food","Rolls"]
   },

   {
    name:"KFC",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
    rating:"4.3",
    cuisines:["Burger","American"]
   },

   {
    name:"Sauces",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6684d5f10aa972de3df479f67cdcf5a9",
    raging:"3.8",
    cuisines:["Fast Food","Rolls"]
   },
   {
    name:"KFC",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
    rating:"4.3",
    cuisines:["Burger","American"]
   },

   {
    name:"Sauces",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6684d5f10aa972de3df479f67cdcf5a9",
    raging:"3.8",
    cuisines:["Fast Food","Rolls"]
   },

   {
    name:"KFC",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
    rating:"4.3",
    cuisines:["Burger","American"]
   },

   {
    name:"Sauces",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6684d5f10aa972de3df479f67cdcf5a9",
    raging:"3.8",
    cuisines:["Fast Food","Rolls"]
   },
   {
    name:"KFC",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
    rating:"4.3",
    cuisines:["Burger","American"]
   },

   {
    name:"Sauces",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6684d5f10aa972de3df479f67cdcf5a9",
    raging:"3.8",
    cuisines:["Fast Food","Rolls"]
   },


]
const RestaurantCard=({name,image,rating,cuisines})=>{
    return (
        <div className="card">

            <img src={image}></img>
            <h2>{name}</h2>
            <h4>{rating} stars</h4>
            <h5>{cuisines.join(" , ")}</h5>

        </div>
    )
}
const BodyComponent=()=>{
    return(
        <div className="Body">
            
            {/* <RestaurantCard {...Cards[0]}/>
            <RestaurantCard {...Cards[1]}/>
            <RestaurantCard {...Cards[2]}/>
            <RestaurantCard {...Cards[3]}/>
            <RestaurantCard {...Cards[4]}/>
            <RestaurantCard {...Cards[5]}/>
            <RestaurantCard {...Cards[6]}/>
            <RestaurantCard {...Cards[7]}/>
            <RestaurantCard {...Cards[8]}/>
            <RestaurantCard {...Cards[9]}/> */}

            {
                Cards.map((card)=>{
                    return <RestaurantCard {...card}     />

                })
            }
           
            
        </div>
        
    )
}

const FooterComponent=()=>{
    return(
        <div className="footer">
            <h1 align="center">Striver</h1>
            <h5 align="center">Copyrights owned by striver</h5>
            <h4 align="center">+91 94920xxxx0</h4>
        </div>
    )
}

const AppLayout=()=>{
    return (
        <>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);