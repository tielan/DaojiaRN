/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';
import CouponItem from './CouponItem'

export default class CouponList extends Component {

  _keyExtractor =(item) => (item.couponCode)

  _renderItem = ({item}) => (
    <CouponItem
      item={item}></CouponItem>
  )

  render() {
    let {voucherList} = this.props
    console.log(voucherList)

    return (
      <FlatList
        style={styles.container}
        horizontal={true}
        data={voucherList}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        // ListHeaderComponent={<View style={styles.header}></View>}
        >
      </FlatList>
    );
  }
}

let width = Dimensions.get('window').width - 20

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 5,
    paddingBottom: 22,
    // width: width,
    // transform: [
    //   {
    //     translateX: -5
    //   }
    // ],
    // backgroundColor: '#fff',
    // shadowOpacity: 0.2,
    // shadowRadius: 1,
    // shadowOffset: {width: 0, height: 0},
  },
  // header: {
  //   position: 'absolute',
  //   height: 95,
  //   width: 10,
  //   left: -10,
  //   top: 0,
  //   zIndex: 999,
  //   backgroundColor: '#ff0'
  // }
});
