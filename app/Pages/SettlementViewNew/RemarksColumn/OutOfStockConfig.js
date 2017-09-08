/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import IconArrow from '../IconArrow'
import RemarkText from './RemarkText'

export default class MyComponent extends Component {
  render() {
    let { outOfStockConfig } = this.props
    console.log(outOfStockConfig);
    return (
      <View style={{flexDirection: 'row'}}>
        <RemarkText>
          {outOfStockConfig[0]}
        </RemarkText>
        <IconArrow direction='bottom' style={styles.arrow}></IconArrow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arrow: {
    tintColor: '#666',
    marginLeft: 10,
    width: 13,
    height: 13
  }
});
