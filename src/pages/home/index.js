import React,{Component} from 'react'
import {Link ,Redirect } from 'react-router-dom'
class Home extends Component{
    constructor(props) {
        super(props);
    this.state={
        list:[
            {cid:123,title:'技术胖的个人博客-1'},
            {cid:456,title:'技术胖的个人博客-2'},
            {cid:789,title:'技术胖的个人博客-3'},
        ]
    }
        // this.props.history.push("/yy");
    }
    render() {

        return (
            <div>
                {/*<Redirect  to="/yy"/>*/}
                我是home组件

                <ul>
                    {
                        this.state.list.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <Link to={'/list/'+item.cid}>{item.title}</Link>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>

        );
    }
}
export default Home