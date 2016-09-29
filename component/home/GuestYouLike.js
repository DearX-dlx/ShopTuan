/**
 * Created by dearx on 16/9/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

//头部组件
var HeadView = require('./HomeShopCenter');

var GuestYouLike = React.createClass({

    getDefaultProps(){
        return{
            apiurl:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        };
    },

    getInitialState(){
        return{
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        };
    },

    render() {
        return (
            <View style={styles.container}>
                <HeadView
                    leftImage="cnxh"
                    leftTitle="猜你喜欢"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },

    //组件渲染完后进行数据请求
    componentDidMount(){
        fetch(this.props.apiurl)
            .then((response) => response.json())
            .then((responseJsonData) => {
                // console.log(responseJsonData);
                var rowDataArr = responseJsonData.data;
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(rowDataArr)
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    //实例row组件
    renderRow(rowData){
        return(
            <View>
                <Text>{rowData.title}</Text>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        // marginTop:10,
    },

});

module.exports = GuestYouLike;
