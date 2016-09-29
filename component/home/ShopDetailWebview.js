/**
 * Created by dearx on 16/9/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    WebView,
} from 'react-native';

var ShopDetailWebview = React.createClass({

    render() {
        console.log(this.props.dear_url);
        return (
            <View style={styles.container}>
                {this.renderNavbar()}
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.props.dear_url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                />
            </View>
        );
    },

    renderNavbar(){
        return(
            <View style={styles.navbarStyle}>
                <View style={styles.distanceViewStyle}></View>

                <TouchableOpacity onPress={this.clickBackBtn}>
                    <Text style={styles.backTitleStyle}>返回</Text>
                </TouchableOpacity>

                <Text style={styles.navTitleStyle}>{this.props.title}</Text>
                <TouchableOpacity>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
                </TouchableOpacity>
            </View>
        );
    },

    clickBackBtn(){
        this.props.navigator.pop();
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbarStyle:{
        height:Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(232,58,6,1)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:Platform.OS == 'ios' ? 10 : 0,
    },
    navTitleStyle:{
        flex:1,
        color:'white',
        fontSize:18,
        textAlign:'center',
    },
    distanceViewStyle:{
        width:24,
        height:24,
    },
    navImageStyle:{
        width:24,
        height:24,
        marginRight:10,
        //position:'absolute',
        //right:10,
        //bottom:15,
    },
    backTitleStyle:{
        color:'white',
        fontSize:16,
    },
    webView:{
        flex:1,
    },
});

module.exports = ShopDetailWebview;