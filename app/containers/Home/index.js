/**
 * Created by zj on 2017/8/9.
 */
import React from 'react'
import {Layout} from 'antd'
const {Header, Footer, Content,Sider} = Layout
class Home extends React.Component {
    constructor(props,context) {
        super(props,context)
    }
    render() {
        return (
            <div>
                <Header>Header</Header>
                <Layout>
                    <Sider>
                        Silder
                    </Sider>
                    <Content>
                        Content
                    </Content>
                </Layout>
                <Footer>
                    Footer
                </Footer>
            </div>
        )
    }
}
export default Home