/**
 * Created by zj on 2017/8/9.
 */
import React from 'react'
import {Form,Icon,Button,Checkbox,Input} from 'antd'
import Login from './Login'
class App extends React.Component{
    constructor(props,context) {
        super(props,context)
        this.state = {
            isHome : false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            isHome:true
        })
    }
    render(){
        return (
            <div>
                {/*<div onClick={this.handleClick}>点击我即可登录</div>*/}
                <Form>
                    {this.state.isHome ? this.props.children : <Login handleClick={this.handleClick}/> }
                </Form>
            </div>
        )
    }
}
export default App