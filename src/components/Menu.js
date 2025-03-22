import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // 引入多语言支持

// 菜单项数据
const menuItems = [
  { id: 1, name: '炸鸡套餐', price: 20 }, // 餐品1
  { id: 2, name: '薯条', price: 10 }, // 餐品2
  { id: 3, name: '鸡翅', price: 15 }, // 餐品3
];

// 菜单组件
const Menu = ({ onSelect = () => {} }) => {
  const { t } = useTranslation(); // 使用 useTranslation 钩子获取翻译函数
  const [selectedItem, setSelectedItem] = useState(null); // 当前选中的餐品
  const [spiceLevel, setSpiceLevel] = useState(t('spiceLevelOptions.mild')); // 辣度，默认值为“微辣”
  const [saltLevel, setSaltLevel] = useState(t('saltLevelOptions.normal')); // 盐度，默认值为“正常”

  // 处理选择餐品
  const handleSelectItem = (item) => {
    setSelectedItem(item); // 设置选中的餐品
  };

  // 处理确认选择
  const handleConfirm = () => {
    if (!selectedItem) {
      alert(t('select')); // 如果没有选择餐品，弹出提示
      return;
    }
    // 将选中的餐品、辣度和盐度传递给父组件
    onSelect({
      ...selectedItem,
      spiceLevel,
      saltLevel,
    });
  };

  return (
    <div className="menu-container">
      {/* 标题：请选择餐品 */}
      <h1>{t('select')}</h1>

      {/* 餐品列表 */}
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            {/* 餐品名称 */}
            <span className="item-name">{item.name}</span>
            {/* 餐品价格 */}
            <span className="item-price">￥{item.price}</span>
            {/* 选择按钮 */}
            <button className="select-button" onClick={() => handleSelectItem(item)}>
              {t('select')}
            </button>
          </li>
        ))}
      </ul>

      {/* 如果选中了餐品，显示定制选项 */}
      {selectedItem && (
        <div className="customize-container">
          {/* 定制标题：定制您的 [餐品名称] */}
          <h2>{t('customize')} {selectedItem.name}</h2>

          {/* 辣度和盐度选项容器 */}
          <div className="customize-options">
            {/* 辣度选项 */}
            <div className="customize-option">
              <label>{t('spiceLevel')}：</label> {/* 辣度标签 */}
              <select value={spiceLevel} onChange={(e) => setSpiceLevel(e.target.value)}>
                <option value={t('spiceLevelOptions.mild')}>{t('spiceLevelOptions.mild')}</option> {/* 微辣 */}
                <option value={t('spiceLevelOptions.medium')}>{t('spiceLevelOptions.medium')}</option> {/* 中辣 */}
                <option value={t('spiceLevelOptions.hot')}>{t('spiceLevelOptions.hot')}</option> {/* 特辣 */}
              </select>
            </div>

            {/* 盐度选项 */}
            <div className="customize-option">
              <label>{t('saltLevel')}：</label> {/* 盐度标签 */}
              <select value={saltLevel} onChange={(e) => setSaltLevel(e.target.value)}>
                <option value={t('saltLevelOptions.low')}>{t('saltLevelOptions.low')}</option> {/* 少盐 */}
                <option value={t('saltLevelOptions.normal')}>{t('saltLevelOptions.normal')}</option> {/* 正常 */}
                <option value={t('saltLevelOptions.high')}>{t('saltLevelOptions.high')}</option> {/* 多盐 */}
              </select>
            </div>
          </div>

          {/* 确认按钮 */}
          <button className="confirm-button" onClick={handleConfirm}>
            {t('confirm')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;