import React, { PureComponent } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import ContentText from '../ContentText'
import RMB from './RMB'
import ProductPrice from './ProductPrice'

export default class ProductItem extends PureComponent {
  render() {
    let item = this.props.item
    return (
      <View style={styles.productItem} >
        <Image style={styles.productImg} source={{uri: item.img}}></Image>
        <View style={styles.productInfo}>
          <ContentText numberOfLines={1}>{item.name}</ContentText>
          <ProductPrice item={item}></ProductPrice>
        </View>
        {
          item.type == 6 || item.type == 1203 || item.type == 1202
          ? <View style={[styles.tag, item.type == 1202 ? {backgroundColor: '#39bb7c'} : {backgroundColor: '#ec6c86'}]}><Text style={{fontSize: 11, color: '#fff'}}>{item.discountDescribe}</Text></View>
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    marginBottom: 20,
    overflow: 'hidden'
  },
  productImg: {
    width: 50,
    height: 50,
    marginRight: 5,
    backgroundColor: '#f4f4f4'
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  tag: {
    position: 'absolute',
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 6,
    height: 15,
    left: 0,
    top: 0
  }
})
