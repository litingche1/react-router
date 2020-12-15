import React,{Component} from 'react';
class List extends Component{
    constructor(props) {
        super(props);
        this.state={
            id:'',

        }
    }
    componentDidMount() {
        console.log(this.props.match.params)
        this.setState({
            id:this.props.match.params.id
        })
    }

    render() {
        return (
            <div>
                我是list组件
            <h1>我是路由传值--->{this.state.id}</h1>
            </div>

        )
    }
}
export default List