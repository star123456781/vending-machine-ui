import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to the Automatic Fryer Vending System',
        select: 'Please select your meal',
        payment: 'Payment',
        selectedItem: 'Selected Item',
        amount: 'Amount',
        wechatPay: 'WeChat Pay',
        pickup: 'Pickup',
        orderNumber: 'Your Order Number',
        scanQRCode: 'Please scan the QR code to pick up your meal',
        simulatePickup: 'Simulate Pickup',
        customize: 'Customize Your',
        spiceLevel: 'Spice Level',
        saltLevel: 'Salt Level',
        confirm: 'Confirm',
        loading: 'Loading...',
        pickupSuccess: 'Pickup successful!',
        spiceLevelOptions: {
          mild: 'Mild',
          medium: 'Medium',
          hot: 'Hot',
        },
        saltLevelOptions: {
          low: 'Low Salt',
          normal: 'Normal Salt',
          high: 'High Salt',
        },
      },
    },
    zh: {
      translation: {
        welcome: '欢迎使用自动油炸机售卖机系统',
        select: '请选择您的餐品',
        payment: '支付',
        selectedItem: '您选择的餐品',
        amount: '金额',
        wechatPay: '微信支付',
        pickup: '取餐',
        orderNumber: '您的订单号',
        scanQRCode: '请扫描以下二维码取餐',
        simulatePickup: '模拟取餐',
        customize: '定制您的',
        spiceLevel: '辣度',
        saltLevel: '盐度',
        confirm: '确认',
        loading: '加载中...',
        pickupSuccess: '取餐成功！',
        spiceLevelOptions: {
          mild: '微辣',
          medium: '中辣',
          hot: '特辣',
        },
        saltLevelOptions: {
          low: '少盐',
          normal: '正常',
          high: '多盐',
        },
      },
    },
  },
  lng: 'zh', // 默认语言
  fallbackLng: 'en',
});

export default i18n;