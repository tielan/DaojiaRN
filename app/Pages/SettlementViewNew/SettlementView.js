import React, { Component } from 'react'
import {observer, inject} from 'mobx-react/native'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import SubmitInfo from './SubmitInfo'
import ReceiptAddress from './ReceiptAddress'
import DeliverTime from './DeliverTime'
import SettleContent from './SettleContent'
import RemarksColumn from './RemarksColumn'
// import settleData from './_TestData'

@inject('settle')
@observer
export default class SettlementView extends Component {
  // state = {
  //   settleData: settleData.result
  // }

  render() {
    console.log('rerender');
    // console.log(this.state.settleData);
    let accountData = this.props.settle.accountData
    let settleData = this.props.settle.accountResult
    let modulesMap = {}
    for (module of settleData.newModules) {
      modulesMap[module.moduleKey] = module
    }
    return (
      <View style={styles.container}>
        <ReceiptAddress
          receiptAddress={modulesMap.receiptAddress.data}
          ></ReceiptAddress>
        <ScrollView style={styles.scrollView}>
          <DeliverTime
            deliverTime={modulesMap.deliverTime.data}
            distributionType={settleData.distributionType} >
          </DeliverTime>
          <SettleContent
            {...modulesMap}
            totalWeight={settleData.totalWeight}
            >
          </SettleContent>
          <RemarksColumn
            orderMark={modulesMap.orderMark}
            outOfStockConfig={modulesMap.outOfStockConfig.data}></RemarksColumn>
        </ScrollView>
        <SubmitInfo>{modulesMap.submitInfo.data}</SubmitInfo>
      </View>
    )
  }
}

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingBottom: 20,
  },
  scrollView: {
    top: -30,
    marginHorizontal: 10,
    marginBottom: 20
    // borderTopWidth: 10,
    // borderColor: 'rgba(73, 179, 77, 0.8)'
  }
});
