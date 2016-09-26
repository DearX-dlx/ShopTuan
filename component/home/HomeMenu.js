/**
 * Created by dearx on 16/9/26.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

//屏幕的宽高控制
var Dimensions = require('Dimensions');
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

var HomeMenu = React.createClass({

    //设置初始值
    getInitialState(){
        return{
            activePage:0,
        };
    },

    render(){
        return (
            <View style={styles.container}>
                {/*内存部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                >
                    {this.renderScrollViewItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorStyle}>
                    {this.renderIndicator()}
                </View>

            </View>
        );
    },

    //scrollView里面的item
    renderScrollViewItem(){
        //1.组件数组
        var itemArr = [];
        //2.颜色数组
        var colorArr = ['red','green'];
        //3.遍历创建组件
        for (var i=0;i<colorArr.length;i++){
            itemArr.push(
                <View key={i} style={{backgroundColor:colorArr[i],width:screenWidth,height:120}}>
                    <Text>{i}</Text>
                </View>
            );
        }
        //4.返回组件
        return itemArr;
    },

    //页码界面
    renderIndicator(){
        //1.指示器视图数组、样式
        var indicatorArr = [],style;
        //2.实例化组件
        for (var i = 0;i<2;i++){
            style = (i === this.state.activePage) ? {color:'orange'} : {color:'gray'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        //3.返回组件
        return indicatorArr;
    },

    //重写系统的动画完成的方法
    onScrollAnimationEnd(e){
        //1.计算当前页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / screenWidth);
        //2.更新状态机
        this.setState({
            activePage:currentPage,
        });
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor:'yellow',
    },
    indicatorStyle:{
        flexDirection:'row',
        justifyContent:'center',
    },
});

module.exports = HomeMenu;
