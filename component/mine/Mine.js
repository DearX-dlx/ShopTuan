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
    TouchableOpacity,
    ScrollView,
} from 'react-native';

var Cell = require('./MineCell');
var Header = require('./MineHeader');

var Mine = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <ScrollView>
                    <View>
                        <Cell imageURl="collect" title="我的订单" detail="查看全部订单" />
                        {this.renderOrderExtend()}
                    </View>
                    <View style={{marginTop:10}}>
                        <Cell imageURl="draft" title="钱包" detail="账户余额: 100" />
                        <Cell imageURl="like" title="抵用券" detail="10" />
                    </View>
                    <View style={{marginTop:10}}>
                        <Cell imageURl="card" title="积分商城" />
                    </View>
                    <View style={{marginTop:10}}>
                        <Cell imageURl="new_friend" title="今日推荐" detailImg="me_new" />
                    </View>
                    <View style={{marginTop:10}}>
                        <Cell imageURl="pay" title="我要合作" detail="轻松开店,招财进步" />
                    </View>
                </ScrollView>
            </View>
        );
    },

    renderOrderExtend(){
        return(
            <View style={styles.orderExtendStyle}>
                {this.renderOrderExtendItem("order1","待付款")}
                {this.renderOrderExtendItem("order2","待使用")}
                {this.renderOrderExtendItem("order3","待评价")}
                {this.renderOrderExtendItem("order4","退款/售后")}
            </View>
        );
    },

    renderOrderExtendItem(imageURL,title){
        return(
            <TouchableOpacity>
                <View style={styles.orderExtendItemStyle}>
                    <Image style={{width:33.5,height:24}} source={{uri:imageURL}} />
                    <Text style={styles.orderExtendTitleStyle}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    },

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    orderExtendItemStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    orderExtendStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:60,
        backgroundColor:'white',
    },
    orderExtendTitleStyle:{
        marginTop:5,
        color:'#c0c0c0',
        fontSize:13,
    },
});

module.exports = Mine;