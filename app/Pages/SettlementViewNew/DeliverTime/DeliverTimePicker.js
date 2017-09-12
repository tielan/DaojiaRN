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

export default class DeliverTimePicker extends Component {
  constructor (props) {
    super(props)
    let { timeList } = this.props
    this.state = {
      selectedDate: timeList[0].promiseDate,
      selectedTimeList: timeList[0],
      selectedTime: timeList[0][0]
    }
  }

  _dateChangeHandle = (itemValue, itemIndex) => {
    let { timeList } = this.props
    console.log(timeList[itemIndex].promiseDate);
    this.setState({
      selectedDate: itemValue,
      selectedTimeList: timeList[itemIndex].promiseTimeRespItems
    })
  }

  _renderDateTimePicker = () => {
    console.log(this.state.selectedTimeList);
    let { selectedTimeList } = this.state
    let pickerItem = selectedTimeList.map((item, index) => {
      return <Picker.Item
        key={item.promiseDate}
        label={item.promiseTimeText}
        value={item.promiseDate} />
    })

    return <Picker
      style={styles.picker}
      selectedValue={this.state.selectedTime}
      onValueChange={this._dateChangeHandle}>
      {pickerItem}
    </Picker>
  }

  _renderDatePicker =  () => {
    let { timeList } = this.props
    let pickerItem = timeList.map((item, index) => {
      return <Picker.Item
        key={item.promiseDate}
        label={item.promiseDateText}
        value={item.promiseDate} />
    })

    return <Picker
      style={styles.picker}
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
        <View style={styles.mask}>
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
              onPress={() => {
                this.props.setModalVisible(false, this.state.selectedValue)
              }}
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
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
