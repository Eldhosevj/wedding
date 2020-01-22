import React from 'react'
import "../css/google.css"
import MAP from '../picture/MAP.png'
function GoogleMap(){

let googleMaps=(<div className="googleMap">


<iframe  title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.117830082085!2d76.126683!3d11.017647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa06c470ad135702d!2sHeavens%20Convention%20center!5e0!3m2!1sen!2sin!4v1577719067341!5m2!1sen!2sin" 
style={{width :"500px",height:"250px", frameborder:0,border:0,allowfullscreen:""}}  ></iframe>
</div>)


let googleMapss=(<div className="googleMapss">


<iframe  title="myFrames" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.117830082085!2d76.126683!3d11.017647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa06c470ad135702d!2sHeavens%20Convention%20center!5e0!3m2!1sen!2sin!4v1577719067341!5m2!1sen!2sin"
style={{width :"250px",height:"250x", frameborder:0,border:0,allowfullscreen:""}}  ></iframe>
</div>)



return (<div className='googleMapsMainDiv'>
<div className='maps'>
<img  src ={MAP} alt=''/>

</div>

<h1>HEAVENS CONVENTION CENTER MAKKARAPARAMBA</h1>

    {googleMaps}
    {googleMapss}
</div>)

}

export default GoogleMap