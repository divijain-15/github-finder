import React from 'react'
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.jpg";
import Image8 from "../assets/image8.jpg";
import Image9 from "../assets/image9.jpg";


export default function Grid() {
    return (
        <div class="row">

            <div class="column">
                <img src={Image1} style={{width:"100%"}}/>
                <img src={Image2} style={{width:"100%"}}/>
                <img src={Image3} style={{width:"100%"}}/>

            </div>

            <div class="column">
                <img src={Image4} style={{width:"100%"}}/>
                <img src={Image5} style={{width:"100%"}}/>
                <img src={Image6} style={{width:"100%"}}/>

            </div>

            <div class="column">
                <img src={Image7} style={{width:"100%"}}/>
                <img src={Image8} style={{width:"100%"}}/>
                <img src={Image9} style={{width:"100%"}}/>

            </div>
           
            
        </div>
    )
}
