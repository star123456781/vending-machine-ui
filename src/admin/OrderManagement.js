import React, { useEffect, useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // 模拟接收订单
    const newOrder = {
      id: '12345',
      items: [{ name: '炸鸡套餐', price: 20 }],
      status: '待处理',
    };
    setOrders([newOrder]);
  }, []);

  const handlePrepare = (orderId) => {
    // 模拟备料完成
    alert(`订单 ${orderId} 已备料`);
  };

  return (
    <div>
      <h1>订单管理</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>订单号：{order.id}</p>
            <p>状态：{order.status}</p>
            <button onClick={() => handlePrepare(order.id)}>备料完成</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;