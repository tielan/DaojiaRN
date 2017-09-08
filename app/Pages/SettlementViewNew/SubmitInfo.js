import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Button from 'react-native-button'
import RMB from './SettleContent/RMB'

export default class SettleSubmit extends Component {
  render() {
    // 新版结算页样式
    return (
      <View style={styles.settleBottomBar}>
        <Text style={styles.submitText}>
          立即支付{'  '}
          <RMB style={{fontSize: 13}}></RMB>
          {this.props.totalMoney.replace('￥', "")}元
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  settleBottomBar: {
    position: 'absolute',
    bottom: 25,
    left: 15,
    right: 15,
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#46ae4d',
    paddingLeft: 15,
    borderRadius: 5,
    // 阴影
    shadowColor: '#46ae4d',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
  },
  submitText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
});
