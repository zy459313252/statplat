import React from 'react';
import {Link} from 'react-router';
import 'antd/dist/antd.less';
import '../less/tpl.less';
import {Layout, Menu, Breadcrumb, Icon, Button} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

export default class Template extends React.Component {

  constructor() {
    super();
  }

  logout(){
    localStorage.setItem('uid','');
    localStorage.setItem('pwd','');
    window.location.href="index.html#/login";
  }

  componentWillMount() {
    if(!localStorage.getItem('uid'))window.location.href="index.html#/login";
    window.location.href="index.html#/reportList";
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo"></div>
          <Button className="logout" onClick={this.logout}>logout</Button>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
          >
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{background: '#fff'}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{height: '100%'}}
            >
              <Menu.Item key="1">准入报告列表<Link to={`/reportList`}/></Menu.Item>
              <Menu.Item key="2">月度统计表<Link to={`/monthStat`}/></Menu.Item>
              <Menu.Item key="3">配置管理<Link to={`/settings`}/></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{padding: '0 24px 24px'}}>
            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

