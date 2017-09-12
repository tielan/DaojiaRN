/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,

} from 'react-native';
import OrderMark from './OrderMark'
import OutOfStockConfig from './OutOfStockConfig'
export default class RemarksColumn extends Component {
  render() {
    let { outOfStockConfig, orderMark } = this.props
    return (
      <View style={styles.container}>
        <OrderMark defaultText={orderMark.defaultText}></OrderMark>
        <View style={styles.line}></View>
        <OutOfStockConfig outOfStockConfig={outOfStockConfig}></OutOfStockConfig>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  line: {
    marginHorizontal: 10,
    height: 15,
    borderLeftWidth: 0.5,
    borderColor: '#666'
  },

});
