import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import StoreTitle from './StoreTitle'
import ProductInfo from './ProductInfo'
import MoneyInfo from '../MoneyInfo'
import PlatPoints from '../PlatPoints'
import TotalMoney from './TotalMoney'

export default class SettleContent extends Component {
  render() {
    // console.log(this.props);
    let {productInfo, totalWeight, moneyInfo, disMoneyInfo, couponInfo, platPoints} = this.props
    return (
      <View style={styles.settleContentWrapper}>
        <StoreTitle></StoreTitle>
        <ProductInfo
          productInfo={productInfo.data}
          totalWeight={totalWeight}></ProductInfo>
        <MoneyInfo
          moneyInfo={moneyInfo.data}
          disMoneyInfo={disMoneyInfo.data}
          couponInfo={couponInfo}>
        </MoneyInfo>

        <PlatPoints platPoints={platPoints.data}></PlatPoints>
        <TotalMoney></TotalMoney>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settleContentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    // height: 180,
  },

})
