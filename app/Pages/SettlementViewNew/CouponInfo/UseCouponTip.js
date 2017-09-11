/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class UseCouponTip extends Component {
  state = {
    couponCount: undefined
  }

  render() {
    let {couponVO} = this.props
    let tip = couponVO && couponVO.addItemNoticeOne
    ? couponVO.addItemNoticeOne
    : (this.state.couponCount
      ? `${this.state.couponCount}张优惠券可用`: '')

    return (
      <View style={styles.useCouponContainer}>
        <View style={styles.toUseCoupon}>
          <Text style={styles.useCouponTitle}>查看优惠券</Text>
        </View>

        {/* 查看优惠券提示 */}
        {
          tip ?
          <Text style={styles.useCouponTip}>{tip} </Text> : null
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({

  useCouponContainer: {
    marginBottom: 14,
    height: 90,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toUseCoupon: {
    borderColor: '#47b34f',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  },
  useCouponTitle: {
    color: '#47b34f'
  },
  useCouponTip: {
    fontSize: 13,
    color: '#666',
    paddingTop: 10
  }
});
