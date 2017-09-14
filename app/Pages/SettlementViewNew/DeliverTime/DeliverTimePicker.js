/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Picker,
  TouchableWithoutFeedback
} from 'react-native';
import {inject} from 'mobx-react/native'

@inject('settle')
export default class DeliverTimePicker extends Component {
  constructor (props) {
    super(props)
    let { timeList } = this.props
    this.state = {
      selectedDate: 0,
      selectedTimeList: timeList[0].promiseTimeRespItems,
      selectedTime: 0
    }
  }

  _confirmHandle = () => {
    let {selectedDate, selectedTime, selectedTimeList} = this.state
    let {timeList} = this.props
    let timeData = selectedTimeList[selectedTime]
    let promiseDate = timeList[selectedDate].promiseDate
    let promiseStartTime = timeData.promiseStartTime
    let promiseEndTime = timeData.promiseEndTime

    let data = {
      promiseDate: promiseDate,
      promiseStartTime: promiseStartTime,
      promiseEndTime: promiseEndTime,
      onTime: timeData.dingshida ? 1 : 0,
      sendTime: promiseDate + ' ' + promiseStartTime + ':00',
      deliveryTime: promiseDate + ' ' + promiseEndTime + ':00',
      expectedDeliveryTime: timeData.expectedDeliveryTime,
      deliveryTip: timeData.deliveryTip
    }
    this.props.settle.updateAccountData(data)
    // console.log(data);
    this.props.setModalVisible(false, data)
  }

  _dateTimeChangeHandle = (itemValue) => {
    this.setState({
      selectedTime: itemValue
    })
  }

  _renderDateTimePicker = () => {
    // console.log(this.state.selectedTimeList);
    let { selectedTimeList } = this.state
    let pickerItem = selectedTimeList.map((item, index) => {
      return <Picker.Item
        key={index}
        label={item.promiseTimeText}
        value={index} />
    })

    return <Picker
      style={[styles.picker, {flex: 0.6}]}
      itemStyle={styles.pickerItem}
      selectedValue={this.state.selectedTime}
      onValueChange={this._dateTimeChangeHandle}>
      {pickerItem}
    </Picker>
  }

  // 日期 Picker change 处理
  _dateChangeHandle = (itemValue) => {
    let { timeList } = this.props
    // console.log(timeList[itemValue].promiseDate);
    this.setState({
      selectedDate: itemValue,
      selectedTimeList: timeList[itemValue].promiseTimeRespItems
    })
  }

  // 日期 Picker
  _renderDatePicker =  () => {
    let { timeList } = this.props
    let pickerItem = timeList.map((item, index) => {
      return <Picker.Item
        key={index}
        label={item.promiseDateText}
        value={index} />
    })

    return <Picker
      style={[styles.picker, {flex: 0.4}]}
      itemStyle={styles.pickerItem}
      selectedValue={this.state.selectedDate}
      onValueChange={this._dateChangeHandle}>
      {pickerItem}
    </Picker>
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle='overFullScreen'
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props.setModalVisible(false)
        }}>
        <View style={styles.pickerWrapper}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.setModalVisible(false)
            }}>
            <View style={styles.mask}>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.pickerHeader}>
            {/* 取消操作 */}
            <TouchableWithoutFeedback
              onPress={() => {
                this.props.setModalVisible(false)
              }}
              >
              <View>
                <Text style={styles.cancelText}>取消</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={this._confirmHandle}
              >
              <View>
                <Text style={styles.confirmText}>确定</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.pickerContainer}>
            {this._renderDatePicker()}
            {this._renderDateTimePicker()}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    // justifyContent: 'flex-end',
  },
  pickerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    flexDirection: 'row'
  },
  picker: {
    backgroundColor: '#fff',
    height: 170,
    flex: 1
  },
  pickerItem: {
    fontSize: 18,
    lineHeight: 30
  },
  pickerHeader: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15
  },
  cancelText: {
    color: '#47b34f',
    fontSize: 14
  },
  title: {
    fontSize: 18,
    color: '#333'
  },
  confirmText: {
    fontSize: 14,
    color: '#47b34f'
  },
});
