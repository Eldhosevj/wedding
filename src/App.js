import React from 'react'
import '../src/css/app.css'
import GoogleMap from '../src/pages/googleMap'
import SaveDate from '../src/pages/saveDate'
import Blessing from '../src/pages/blessing'
//import Date from './componets/date'
function App(){




return (<div>
<div className='first-save-date'>

<SaveDate/>
</div>

<div className='second-save-date'>

<Blessing/>
</div>
<div className='third-save-date'>

<GoogleMap/>
</div>

</div>)

}

export default App

