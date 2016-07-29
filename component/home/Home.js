/**
 * Created by dearx on 16/7/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

//首页详情页面
var HomeDetail = require('./HomeDetail');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.pushToDetail()}}>
                <Text style={styles.welcome}>
                    Welcome to Home!
                </Text>
                </TouchableOpacity>
            </View>
        );
    },

    pushToDetail(){
        this.props.navigator.push({
            component:HomeDetail,
            title:'首页详情',
        });
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
});

module.exports = Home;