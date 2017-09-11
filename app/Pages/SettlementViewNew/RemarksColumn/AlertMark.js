/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

export default class AlertMark extends Component {

  constructor (props) {
    super(props)
    this.state = {
      text: props.orderMark
    }
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.setState({
            text: this.props.orderMark
          })
          this.props.setModalVisible(false)
        }}
        >
       <View style={styles.mask}>
        <View style={styles.alertWrapper}>
          <View style={styles.markHeader}>

            {/* 取消操作 */}
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({
                  text: this.props.orderMark
                })
                this.props.setModalVisible(false)
              }}
              >
              <View>
                <Text style={styles.cancelText}>取消</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.title}>写备注信息</Text>

            <TouchableWithoutFeedback
              onPress={() => {
                this.props.setModalVisible(false, this.state.text)
            }}>
              <View>
                <Text style={styles.confirmText}>确定</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          {/* 备注输入框 */}
          <TextInput
            autoFocus={true}
            multiline={true}
            style={styles.markInput}
            placeholder={'订单备注（30字以内）'}
            value={this.state.text}
            onChangeText={
              (text) => {
                this.setState({text})
              }
            }
          />
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
    // paddingVertical: '50%'
  },
  alertWrapper: {
    backgroundColor: '#fff',
    flex: 0.8,
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 20,
    transform: [
      {
        translateY: -80
      }
    ]
  },
  markHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 20
  },
  cancelText: {
    color: '#666',
    fontSize: 15
  },
  title: {
    fontSize: 18,
    color: '#333'
  },
  confirmText: {
    fontSize: 15,
    color: '#47b34f'
  },
  markInput: {
    height: 160,
    backgroundColor: '#f4f4f4',
    borderColor: '#e8e8e8',
    borderWidth: 0.5,
    fontSize: 15
  }
});
