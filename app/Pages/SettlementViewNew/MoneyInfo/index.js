/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MoneyItem from './MoneyItem'
import Coupon from './Coupon'
import CouponInfo from '../CouponInfo'

export default class MyComponent extends Component {
  renderMoneyItem (moneyInfo) {
    return moneyInfo.map((val, index) => {
      return (
        <MoneyItem key={val.name} item={val}></MoneyItem>
      )
    })
  }

  render() {
    let {moneyInfo, disMoneyInfo, couponInfo} = this.props

    return (
      <View style={styles.container}>
        {this.renderMoneyItem(moneyInfo)}
        {this.renderMoneyItem(disMoneyInfo)}

        {/* 优惠券使用情况 */}
        <Coupon
          couponName={couponInfo.title}
          couponInfo={couponInfo.data}
          ></Coupon>

        {/* 优惠券列表 */}
        <CouponInfo
          couponInfo={couponInfo.data}>
        </CouponInfo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
