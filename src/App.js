import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from './components/Menu';
import Payment from './components/Payment';
import Pickup from './components/Pickup';
import logo from './assets/logo.png'; // 导入 LOGO 图片
import './App.css';

function App() {
  const { t, i18n } = useTranslation(); // 使用 useTranslation
  const [step, setStep] = useState(0); // 当前步骤
  const [selectedItem, setSelectedItem] = useState(null); // 选择的餐品
  const [order, setOrder] = useState(null); // 订单信息

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // 切换语言
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setStep(1); // 进入支付步骤
  };

  const handlePaySuccess = () => {
    // 生成订单号
    const orderId = `ORDER-${Math.floor(Math.random() * 100000)}`;
    setOrder({
      id: orderId,
      item: selectedItem,
    });
    setStep(2); // 进入取餐步骤
  };

  const handlePickup = () => {
    alert(t('pickupSuccess')); // 使用翻译键
    setStep(0); // 返回点餐步骤
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" /> {/* 添加 LOGO */}
        <div className="language-switcher">
          <button onClick={() => changeLanguage('zh')}>中文</button>
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
      </div>
      <h1>{t('welcome')}</h1>
      {step === 0 && <Menu onSelect={handleSelectItem} />}
      {step === 1 && <Payment item={selectedItem} onPaySuccess={handlePaySuccess} />}
      {step === 2 && <Pickup orderId={order.id} onPickup={handlePickup} />}
    </div>
  );
}

export default App;