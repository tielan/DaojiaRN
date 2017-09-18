/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import UseCouponTip from './UseCouponTip'
import CouponList from './CouponList'

export default class CouponInfo extends Component {

  /**
   * [supportCoupon 是否支持使用优惠券，或者账号是否存在优惠券]
   * @method supportCoupon
   * @param  {[Object]}      couponInfo [优惠券模块数据]
   * @return {[Boolean]}                 [是否支持（true/false）]
   */
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
