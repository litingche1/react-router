import React,{Component} from 'react';
class YY extends Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        // console.log(this.props.match.params)
        // this.setState({
        //     id:this.props.match.params.id
        // })
    }

    render() {
        return (
            <div>
                <h1>我是Redirect组件</h1>
                {/*<h1>我是路由传值--->{this.state.id}</h1>*/}
            </div>

        )
    }
}
export default YY