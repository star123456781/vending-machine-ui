import React from 'react';
import { useTranslation } from 'react-i18next';

const QRCodeEntry = () => {
  const { t } = useTranslation();

  return (
    <div className="qr-code-entry">
      <h1>{t('scanToOrder')}</h1>
      <img src="https://example.com/qr-code.png" alt="点餐二维码" />
      <p>{t('scanHint')}</p>
    </div>
  );
};

export default QRCodeEntry;