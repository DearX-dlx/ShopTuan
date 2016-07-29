/**
 * Created by dearx on 16/7/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,//判断系统平台
    Navigator,
} from 'react-native';

//导入通用的的Tabbar控件
import TabNavigator from 'react-native-tab-navigator';
//首页
var Home = require('../home/Home');
//个人中心
var Mine = require('../mine/Mine');
//更多
var More = require('../more/More');
//商店
var Shop = require('../shop/Shop');

var Main = React.createClass({

    getInitialState(){
        return{
            selectedTab:'home'
        }
    },

    render() {
        return (
            <TabNavigator>
                {/*首页*/}
                {this.renderTabbartItem("首页",'icon_tabbar_homepage','icon_tabbar_homepage_selected',
                    'home','首页',Home)}
                {/*商家*/}
                {this.renderTabbartItem("商家",'icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',
                    'shop','商家',Shop)}
                {/*我的*/}
                {this.renderTabbartItem("我的",'icon_tabbar_mine','icon_tabbar_mine_selected',
                    'mine','我的',Mine)}
                {/*更多*/}
                {this.renderTabbartItem("更多",'icon_tabbar_misc','icon_tabbar_misc_selected',
                    'more','更多',More)}
            </TabNavigator>
        );
    },

    renderTabbartItem(title,iconTabbar,selectIconTabbar,selectedTab,navRouteName,navRouteComponent){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => <Image source={{uri:iconTabbar}} style={styles.tabbarIconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectIconTabbar}} style={styles.tabbarIconStyle} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                <Navigator
                    //实例化路由,title名字和给那个组件配置导航栏
                    initialRoute = {{name:navRouteName , component:navRouteComponent}}
                    //可选函数,用来配置场景动画和手势
                    configureScene = {() => {return Navigator.SceneConfigs.PushFromRight}}
                    //必要参数,用来渲染指定的路由场景
                    renderScene={(route,navigator) => {
                        let Component = route.component;
                        //返回一个组件和一个navigator {...route.passProps}es6的语法,意思就是name='name',age='age'...
                        return <Component {...route.passProps} navigator={navigator} />
                    }}
                />
            </TabNavigator.Item>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    tabbarIconStyle:{
        width: Platform.OS == 'ios' ? 30 : 25,
        height:Platform.OS == 'ios' ? 30 : 25,
    },
    selectedTitleStyle:{
        color:'rgba(232,58,6,1)'
    },
});

module.exports = Main;