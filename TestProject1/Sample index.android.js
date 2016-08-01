
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class TestProject1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js,{'\n'}
          CHERRY!!!!!
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestProject1', () => TestProject1);






<View style={{flex: 1, height:50, justifyContent: 'center'}}>
              <View style={{height: 12, justifyContent: 'center'}}>
                <Text style={{color: 'white', textAlign: 'right', fontSize: 24}}>.</Text>
              </View>
              <View style={{height: 12, justifyContent: 'center'}}>
                <Text style={{color: 'white', textAlign: 'right', fontSize: 24}}>.</Text>
              </View>
              <View style={{height: 12, justifyContent: 'center'}}>
                <Text style={{color: 'white', textAlign: 'right', fontSize: 24}}>.</Text>
              </View>
            </View>








