import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Whiteboard from '@components/whiteboard';

import { Layout } from 'antd';

import { addPath, deletePath } from '@store/actions/zrender';

import './index.less';

const actionCreators = {
  addPath, deletePath
};
@connect(({ zrender }) => ({
  zrender,
}), dispatch => ({...bindActionCreators(actionCreators, dispatch), dispatch}))
class Dashboard extends Component {

  render () {
    const { Header, Content } = Layout;
    const { zrender, addPath, deletePath } = this.props;
    const whiteboardProps = {
      addPath,
      deletePath,
      renderList: zrender.list
    }
    return (
      <div className="dashboard">
        <Layout>
          <Header><div className="dashboard-title">画板</div></Header>
          <Content>
            <Whiteboard {...whiteboardProps}/>
          </Content>
        </Layout>
      </div>
    ) 
  }

}

export default Dashboard;