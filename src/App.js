import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './pages/home'
// import List from './pages/List'
import Video from './pages/video/video.js'
import Workplace from './pages/workPlace/Workplace'
import './App.css';

function App() {
  return (
      <Router>
          <div className="mainDiv">
              <div className="leftNav">
                  <h3>一级导航</h3>
                  <ul>
                      <li><Link to='/'>博客首页</Link></li>
                      <li><Link to='/video'>视频教程</Link></li>
                      <li><Link to='/workplace'>职场技能</Link></li>
                  </ul>
              </div>
              <div className='rightMain'>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/video'  component={Video}></Route>
                  <Route path='/workplace' component={Workplace}></Route>
              </div>
          </div>
      </Router>
      // <Router>
      //     <div className="App">
      //         <ul>
      //             <li>
      //                 <Link to='/'>首页</Link>
      //             </li>
      //             <li>
      //                 <Link to='/list/123'>列表页</Link>
      //             </li>
      //         </ul>
      //         <Route path='/' exact component={Home}></Route>
      //         <Route path='/list/:id' component={List}></Route>
      //         <Route path='/yy' exact component={YY}></Route>
      //     </div>
      // </Router>

  );
}

export default App;
