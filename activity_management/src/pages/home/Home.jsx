import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import styles from './Home.css';
import HomePage from '../homePage/HomePage.jsx';
import ActivitySqare from '../activititySquare/activitySquare';
import Mine from '../mine/Mine';
import Dynamic from '../dynamic/Dynamic'

class Home extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }
  render() {
    const { TabPane } = Tabs;
    return (
      <div>
        <Tabs defaultActiveKey="1" size="small  " tabPosition="bottom">
          <TabPane tab={<div className={styles.iconContain}><img src="./image/icon/shouye2.png" className={styles.icon} alt="" /><span>首页</span></div>} key="1" forceRender >
            <Mine {...this.props} />
          </TabPane>
          <TabPane  tab={<div className={styles.iconContain}><img src="./image/icon/huodong2.png" className={styles.icon} alt="" /><span>活动</span></div>} key="2" forceRender >
            <ActivitySqare {...this.props} />
          </TabPane>
          <TabPane tab={<div className={styles.iconContain}><img src="./image/icon/dongtai2.png" className={styles.icon} alt="" /><span>动态</span></div>} key="3" forceRender >
            <Dynamic {...this.props} />
          </TabPane>
          <TabPane tab={<div className={styles.iconContain}><img src="./image/icon/wode2.png" className={styles.icon} alt="" /><span>我的</span></div>} key="4" forceRender >
            <Mine {...this.props} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Home;