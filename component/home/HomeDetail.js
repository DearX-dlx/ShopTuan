/**
 * Created by dearx on 16/7/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

var HomeDetail = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavbar()}
                <TouchableOpacity onPress={() => {this.popView()}} >
                    <Text style={styles.welcome}>
                        Welcome to HomeDetail!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    popView(){
        this.props.navigator.pop();
    },
    renderNavbar(){
        return(
            <View style={styles.navbarStyle}>

            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navbarStyle:{
        backgroundColor:'red',
        height:64,
    },
});

module.exports = HomeDetail;