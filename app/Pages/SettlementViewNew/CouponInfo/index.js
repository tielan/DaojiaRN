/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import UseCouponTip from './UseCouponTip'
import CouponList from './CouponList'

export default class CouponInfo extends Component {

  supportCoupon (couponInfo) {
    return couponInfo.promoteType || (couponInfo.codeListSuccessFlag && couponInfo.voucherListVO.length > 0)
  }

  render() {
    let {couponInfo} = this.props

    // 不支持优惠券不渲染任何内容
    if (!this.supportCoupon(couponInfo)) return null

    return (
     !couponInfo.codeListSuccessFlag
      ? <UseCouponTip couponVO={couponInfo.vouVO}></UseCouponTip>
      : <CouponList voucherList={couponInfo.voucherListVO}></CouponList>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14
  }
});
