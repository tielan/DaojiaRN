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

export default class PickerConfig extends Component {
  state = {
    selectedValue: 0,
  }

  render() {
    let { outOfStockConfig } = this.props
    let pickerItem = outOfStockConfig.map((item, index) => {
      return <Picker.Item key={'config' + index} label={item} value={index} style={styles.pickerItem}/>
    })

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
            <Text style={styles.title}>如遇缺货</Text>

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
          <Picker
            style={styles.picker}
            selectedValue={this.state.selectedValue}
            onValueChange={
              (itemValue, itemIndex) => this.setState({
                selectedValue: itemValue
              })
            }>
            {pickerItem}
          </Picker>
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
  picker: {
    backgroundColor: '#fff',
    height: 170,
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
