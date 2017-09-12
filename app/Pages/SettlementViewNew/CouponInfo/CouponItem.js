/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class CouponItem extends Component {
  render() {
    let {item} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.amount}>
          {item.amount}
          <Text style={styles.amountUnit}>{item.amountUnit}</Text>
        </Text>
        <View>
          <Text>{item.couponName}</Text>
          <Text>{item.couponTypeDesc}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 198,
    height: 70,
    padding: 20,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#e8e8e8',
    // 阴影
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
  },
  amount: {
    fontSize: 25,
    color: '#ff5757',
    paddingRight: 10
  },
  amountUnit: {
    fontSize: 10
  }
});
