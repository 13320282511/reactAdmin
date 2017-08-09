/**
 * Created by zj on 2017/8/9.
 */
import React from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd'
const FormItem = Form.Item
class Login extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        //const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>

                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>

                </FormItem>
                <FormItem>

                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                               placeholder="Password"/>

                </FormItem>
                <FormItem>

                        <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button"
                            onClick={this.props.handleClick}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

export default Login
