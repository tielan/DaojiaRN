import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import DeliverTag from './DeliverTag'
import IconArrow from '../IconArrow'
import DeliverTimePicker from './DeliverTimePicker'

export default class DeliverTime extends Component {

  state = {
    modalVisible: false,
    selectedTime: 0
  }

  setModalVisible = (modalVisible, selectedTime) => {
    this.setState({
      modalVisible: modalVisible,
      selectedTime: selectedTime
    })
  }


  render () {
    let {deliverTime} = this.props

    return (
      <View style={styles.deliverTimeContainer}>
        <DeliverTag></DeliverTag>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({
              modalVisible: true
            })
          }}>
          <View style={styles.deliverTimeContent}>
            <Text style={styles.deliverTimeText}>{deliverTime.nonPushTimeText}</Text>
            <IconArrow style={styles.deliverTimeArrow}></IconArrow>
          </View>
        </TouchableWithoutFeedback>
        {
          deliverTime.promiseDateRespItems && deliverTime.promiseDateRespItems.length > 0
          ? <DeliverTimePicker
              modalVisible={this.state.modalVisible}
              setModalVisible={this.setModalVisible}
              timeList={deliverTime.promiseDateRespItems}
              ></DeliverTimePicker>
          : null
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  deliverTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
    borderRadius: 5,
    // 阴影
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 3},
  },
  deliverTimeContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  deliverTimeText: {
    color: '#2486ff',
    fontSize: 15,
  },
  deliverTimeArrow:{
    marginLeft: 10,
    tintColor: '#2486ff'
  }
})
