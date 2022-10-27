import React from 'react';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';
import Cards from '../components/Cards';

function Casa() {
    return (
        <div>
        <title>Escotur</title>
        <Navbar color="text-white" position_shadow="absolute"/>
        <Slider/>
        <Partners/>
        <div className="flex justify-center m-20 text-[10vh] font-bold">
        {/* <h1 style={{fontFamily : 'Bebas Neue'}}>VIAGENS</h1> */}
        </div>
        <Cards/>
        </div>

    )
}

export default Casa