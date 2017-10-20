/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Vip extends Component {
  render() {
    let {purchaseTip} = this.props

    return (
      <View style={styles.container}>
        <Text>I'm the Vip component</Text>
        <View><Text>立即开通</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});
