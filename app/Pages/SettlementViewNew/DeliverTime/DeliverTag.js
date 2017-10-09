import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class DeliverTag extends PureComponent {
  render () {
    let distributionType = this.props.distributionType
    return (
      <View style={styles.deliverTag}>
        {
          distributionType == 1
          ? <Text style={styles.deliverTagText}>达达专送</Text>
          : distributionType == 0 ?
            <Text style={[styles.deliverTagText, {backgroundColor: '#999'}]}>商家自送</Text> : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deliverTagText: {
    color: '#fff',
    fontSize: 10
  },
  deliverTag: {
    borderRadius: 2,
    backgroundColor: '#15a9ff',
    width: 45,
    padding: 2,
  }
})
