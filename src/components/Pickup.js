import React from 'react';
import { useTranslation } from 'react-i18next';
import { QRCodeSVG } from 'qrcode.react';

const Pickup = ({ orderId, onPickup }) => {
  const { t } = useTranslation(); // 使用 useTranslation

  return (
    <div>
      <h2>{t('pickup')}</h2> {/* 使用翻译键 */}
      <p>
        {t('orderNumber')}: {orderId} {/* 使用翻译键 */}
      </p>
      <p>{t('scanQRCode')}</p> {/* 使用翻译键 */}
      <QRCodeSVG value={`order-${orderId}`} />
      <button onClick={onPickup}>{t('simulatePickup')}</button> {/* 使用翻译键 */}
    </div>
  );
};

export default Pickup;