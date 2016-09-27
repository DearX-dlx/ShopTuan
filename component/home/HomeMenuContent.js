/**
 * Created by dearx on 16/9/27.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

//屏幕的宽高控制
var Dimensions = require('Dimensions');
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;
//单页展示的row的个数
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70 : 60;
var cellH = 70;
var vMargin = (screenWidth - cellW * cols) / (cols + 1);

var HomeMenuContent = React.createClass({
    //介绍外界改的数据
    getDefaultProps(){
        return{
            dataArr: [],
        };
    },

    //设置listView的数据源
    getInitialState(){
        //创建一个数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1,row2) => row1 !== row2});
        return {
            dataSource:ds.cloneWithRows(this.props.dataArr),
        };
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            >

            </ListView>
        );
    },

    //listView的cell的渲染
    renderRow(rowData){
        return (
            <TouchableOpacity style={styles.rowStyle} onPress={() => {alert('0')}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:rowData.image}} style={{width:52,height:52}}></Image>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    },
});

const styles = StyleSheet.create({
    contentViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:screenWidth,
    },
    rowStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin,
    },
    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 14 : 12,
        color:'gray',
    },
});

module.exports = HomeMenuContent;