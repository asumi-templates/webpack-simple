import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Menu, SubMenu, MenuItem, Table, Col } from 'asumi'
import Header from './components/header'
import data from './constants/data'

import 'asumi/style/asumi-default-theme.css'
// import 'asumi/style/index.less'
import './assets/style/public.css'

class Index extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const menuStyle = {
      top: 0,
      bottom: 0,
      width: 200,
      marginTop: 60,
      position: 'fixed',
      overflowY: 'auto'
    }
    return (
      <div>
        <Header />
        <Menu
          openAll
          style={menuStyle}
        >
          <MenuItem>选项1</MenuItem>
          <MenuItem>选项2</MenuItem>
          <SubMenu title='选项3'>
            <MenuItem>选项4</MenuItem>
            <MenuItem>选项5</MenuItem>
          </SubMenu>
        </Menu>
        <div className='content'>
          <Table
            hover
            striped
            pagination
            isKey='name'
            data={data}
            title='职员信息'
          >
            <Col dataField='name'>姓名</Col>
            <Col dataField='age'>年龄</Col>
            <Col dataField='sex'>性别</Col>
            <Col dataField='address' width={400}>住址</Col>
          </Table>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.querySelector('#app'))
