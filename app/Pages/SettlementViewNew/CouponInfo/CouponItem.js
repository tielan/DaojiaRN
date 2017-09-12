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
        <View style={{flex: 1}}>
          <Text style={[styles.couponDesc, {color: '#333'}]}>{item.couponTitle}</Text>
          <Text style={styles.couponDesc}>{item.limitRule}</Text>
          <Text style={styles.couponDesc}>{item.avilableDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // minWidth: 198,
    height: 70,
    padding: 20,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#e8e8e8',
    backgroundColor: '#fff',
    // 阴影
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 0},
  },
  amount: {
    fontSize: 25,
    color: '#ff5757',
    paddingRight: 10
  },
  amountUnit: {
    fontSize: 10
  },
  couponDesc: {
    fontSize: 12,
    color: '#999',
    lineHeight: 17
  }
});
