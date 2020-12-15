import React from 'react'
import {Route, Link} from 'react-router-dom'
import Moeny from './Money.js'
import Getup from './Getup'
import './video.css'
function WorkPlace(){
    return(
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/workplace/Moeny'>程序员加薪秘籍</Link></li>
                    <li><Link to='/workplace/Getup'>程序员早起攻略</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场技能</h3></div>
                <Route path='/workplace/Moeny' component={Moeny}></Route>
                <Route path='/workplace/Getup' component={Getup}></Route>
            </div>
        </div>
    )
}
export default WorkPlace