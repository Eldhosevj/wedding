import React from 'react'
 import "../../src/css/saveDate.css"
import Dates from '../componets/date'
 function saveDate(){

let saveDates=(<div className='main-div'>
<div className='sub-div'>
<div className='save'><p>Save</p>

</div>

<div className='date'>

<p><span><sup>the</sup> </span>Date
</p>
<br/>

</div>

<div className='undeline'>
<div className='first-undeline'>

<p ><span style={{fontSize:"35px"}}>5</span> <sup>th</sup> of april 2020 </p>

<h2 className='name'>
<span className='Aslar'>Aslar </span> 
<div className='love'>
<div className='love-first'></div>
<div className='love-second'></div>

</div>


 <span className='Aysha'>Aysha</span>
 </h2>
</div>
<div>
   </div>

</div>
</div>
</div>
)

return (<div className='main-save-date'>
    {saveDates}
<Dates/>


</div>)

}
export default saveDate
/*
*/