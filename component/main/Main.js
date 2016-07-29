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
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.tabbarIconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.tabbarIconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Navigator
                        //实例化路由,title名字和给那个组件配置导航栏
                        initialRoute = {{name:'首页' , component:Home}}
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
                {/*商家*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="商家"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.tabbarIconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.tabbarIconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'shop' })}>
                    <Navigator
                        //实例化路由,title名字和给那个组件配置导航栏
                        initialRoute = {{name:'商家' , component:Shop}}
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
                {/*我的*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.tabbarIconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.tabbarIconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <Navigator
                        //实例化路由,title名字和给那个组件配置导航栏
                        initialRoute = {{name:'我的' , component:Mine}}
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
                {/*更多*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.tabbarIconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.tabbarIconStyle} />}
                    onPress={() => this.setState({ selectedTab: 'more' })}>
                    <Navigator
                        //实例化路由,title名字和给那个组件配置导航栏
                        initialRoute = {{name:'更多' , component:More}}
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
            </TabNavigator>
        );
    }
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
});

module.exports = Main;