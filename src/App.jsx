import React from "react";
import data from "./data";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function App(){
    const content=data.map(item => {
        return (
            <Card 
            key={item.id}
            {...item}
            />
        )
    })
    return (
        <div>
            <Navbar/>
            {content}
            <Footer/>
        </div>
    )
}