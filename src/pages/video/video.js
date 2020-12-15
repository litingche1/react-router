import React from 'react'
import {Route, Link} from 'react-router-dom'
import Reactpage from './ReactPage'
import Vue from './Vue'
import Flutter from './Flutter'
import './video.css'
function Video() {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/video/Reactpage'>React</Link></li>
                    <li><Link to='/video/Vue'>Vue</Link></li>
                    <li><Link to='/video/Flutter'>Flutter</Link></li>
                </ul>
            </div>

            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path='/video/Reactpage' component={Reactpage}>

                </Route>
                <Route path='/video/Vue' component={Vue}>

                </Route>
                <Route path='/video/Flutter' component={Flutter}>

                </Route>
            </div>
        </div>
    )
}
export default Video