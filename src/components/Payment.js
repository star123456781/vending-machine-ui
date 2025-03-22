import React from 'react';
import { useTranslation } from 'react-i18next';

const Payment = ({ item, onPaySuccess }) => {
  const { t } = useTranslation(); // 使用 useTranslation

  if (!item) {
    return <p>{t('loading')}</p>; // 使用翻译键
  }

  return (
    <div>
      <h2>{t('payment')}</h2> {/* 使用翻译键 */}
      <p>
        {t('selectedItem')}: {item.name} {/* 使用翻译键 */}
      </p>
      <p>
        {t('amount')}: ￥{item.price} {/* 使用翻译键 */}
      </p>
      <button onClick={onPaySuccess}>{t('wechatPay')}</button> {/* 使用翻译键 */}
    </div>
  );
};

export default Payment;