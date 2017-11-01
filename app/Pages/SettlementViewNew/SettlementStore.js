import { action, observable } from "mobx"
import merge from "lodash/merge"


import TestData from './_TestData'

class SettlementStore {
  @observable accountData = {
    orgCode: '71472',
    storeId: 10003450,
    storeName: '华冠-亦庄店',
    openJPIndustry: 1,
    orderPayType: 'first',
    fromSource: 2,
    jingBeansNum: 0,
    source: 2,
    channelType: '0',
  }
 apidata = {
          // 地址和用户信息
          buyerCity: address.cityId || 0,
          buyerCityName: address.city || "",
          countryId: address.districtCode || 0,
          countryName: address.district || "",
          poi: address.title || "",
          addressId: address.id || 0,
          buyerFullName: address.name || address.address || "",
          buyerFullAddress: address.fullAddress || "",
          buyerMobile: address.mobile,
          addressDetail: address.addressDetail,
          generalAddress: address.generalAddress ? 1 : 0,
          longit: address.longitude || 1,
          dimen: address.latitude || 1,
          coordType: address.coordType || 2,
          buyerProvince: 0, // 非必传-省份

          // 结算信息
          unique: accountData.unique,
          signatureKey: accountData.serverSign || accountData.signatureKey,
          key: accountData.publicKey,
          orderPayType: parseInt_10(This.initData.orderPayType) || 4,
          orgCode: This.initData.orgCode,
          orderPlatform: "H5",
          terminalType: 2,
          clientVersion: "2.1",
          jdBeansCount: parseInt_10(This.initData.jingBeansNum) || undefined,

          // 配送时间
          sendTime: This.payTimeData.sendTime || undefined, // 配送开始时间
          deliveryTime: This.payTimeData.deliveryTime || undefined, // 配送截止时间
          onTime: This.payTimeData.onTime && This.payTimeData.onTime != "0" ? 1 : 0, // 是否为定时达
          expectedDeliveryTime: This.payTimeData.expectedDeliveryTime || undefined, // 预计送达时间 2014-12-31 12:23:00 （4.1版本）
          deliveryTip: This.payTimeData.deliveryTip || undefined, // 配送类型tip 立即送达、营业即送（4.1版本）

          // discountCode: This.initData.discountCode || undefined, // 优惠码
          coupon: This.initData.voucherCode || undefined, // 优惠券
          

          // 小费
          deliveryClerkFeeId: This.initData.deliveryClerkFeeId, // 运费小费类型 运费小费ID 4.7需求

          stockOutOption: userTyped.stockOutOption || undefined,
          orderBuyerRemark: userTyped.Remark || undefined, //备注需获取
          ordererMobile: userTyped.ordererMobile, // 订购人手机
          ordererName: userTyped.ordererName, // 订购人姓名
          deliveryType: This.initData.deliverType || 1, // 需要确认填什么, app端使用 0 （统一写死）V3.7 版本deliveryType ：1：物流配送；2：到店自提
          fromSource: UrlChannelIsJingdongAppSearch ? 3 : 2,
          source: 2,
          platformPoints: This.initData.usePlatPointsFlag ? 1 : 0
          // deliveryStationNo 饿了么才有
        };
        // this.submitData.deliveryTime = "00000000"; // deliveryTime 结束时间
        // 配送时间
        invoiceInfoData = this.invoiceInfoData

        submitInvoice = {}
        if (!invoiceInfoData) {
          submitInvoice = {
            orderInvoiceOpenMark: 2
          }
        } else {
          invoiceInfo = (This.modules.invoiceInfo || This.modules.invoice).data;
          submitInvoice = {
            // 发票信息
            orderInvoiceOpenMark: 1, //是否开发票 1为需开，2为不需要 4.7需求复用原来字段
            orderInvoiceType: invoiceInfoData.titleType, // 发票抬头类型 0、个人 1、企业 4.7需求复用原来字段
            orderInvoiceTitle: invoiceInfoData.titleContent, // 发票抬头
            orderInvoiceContent: invoiceInfo.invoiceStoreRemark, // 发票内容, 商家发票备注
            orderInvoiceFormType: invoiceInfo.invoiceEType, // 发票呈现类型 1：纸质发票 、2：电子发票 4.7需求
            // orderInvoiceFormType: 2, // 发票呈现类型 1：纸质发票 、2：电子发票 4.7需求
            orderInvoiceMail: invoiceInfoData.userEmail, // 发票发送邮箱
            orderInvoiceDutyNo: invoiceInfoData.taxNum, // 发票税号
            orderInvoiceMoneyDetail: invoiceInfo.invoiceMoneyTip, // 发票金额说明
  
          }
        }
        this.submitData = merge(this.submitData, apidata, submitInvoice);
  submitData = {

  }
  @observable accountResult = TestData.result

  @action
  updateAccountData = data => {
    console.log('updateAccountData',data);
    this.accountData = merge(this.accountData, data)
  }
}

export default new SettlementStore
