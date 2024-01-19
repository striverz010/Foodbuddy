import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";



const RestaurantCard=()=>{
    return(

        <h1>Card</h1>

    )
}
const Body=()=>{
    return (
        <div className="body">
            <RestaurantCard/>

        </div>
    )
}


const App=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);