/* @flow */

import React, { Component } from 'react';
import MoneyItem from './MoneyItem'

export default class Coupon extends Component {
  render() {
    let {couponInfo, couponName} = this.props
    let couponValue = ''
    let couponColor = undefined

    if(!couponInfo.promoteType) {
      couponValue = couponInfo.description || '本订单不支持使用'
    } else if (couponInfo.codeListSuccessFlag && couponInfo.voucherListVO.length <= 0) {
      couponValue: '暂无优惠券'
    } else if (couponInfo.vouVO) {
      couponValue = couponInfo.vouVO.discountMoney
      couponColor = '#ff5757'
    }

    let coupon = {
      name: couponName || '优惠券',
      value: couponValue,
      color: couponColor
   }

    return (
      <MoneyItem style={{paddingBottom: 14}}
       item={coupon}></MoneyItem>
    );
  }
}
