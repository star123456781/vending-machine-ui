// 获取所有菜单项
const menuItems = document.querySelectorAll('.menu-item');

// 获取所有定制选项的下拉框
const customizeOptions = document.querySelectorAll('.customize-option select');

// 获取确认按钮
const confirmButton = document.querySelector('.confirm-button');

// 初始化变量，用于存储用户选择
let selectedItems = []; // 存储已选择的餐品
let selectedOptions = {}; // 存储已选择的定制选项

// 监听每个菜单项的“选择”按钮点击事件
menuItems.forEach(item => {
  const selectButton = item.querySelector('.select-button');
  const itemName = item.querySelector('.item-name').innerText;

  selectButton.addEventListener('click', () => {
    // 如果餐品未选择，则添加到已选择列表
    if (!selectButton.disabled) {
      selectedItems.push(itemName);
      selectButton.disabled = true; // 禁用按钮，防止重复选择
      selectButton.innerText = '已选择'; // 修改按钮文本
      selectButton.style.backgroundColor = '#6c757d'; // 修改按钮颜色
    } else {
      // 如果餐品已选择，则从已选择列表中移除
      selectedItems = selectedItems.filter(name => name !== itemName);
      selectButton.disabled = false; // 启用按钮
      selectButton.innerText = '选择'; // 恢复按钮文本
      selectButton.style.backgroundColor = '#007bff'; // 恢复按钮颜色
    }
  });
});

// 监听确认按钮点击事件
confirmButton.addEventListener('click', () => {
  // 获取定制选项的值
  customizeOptions.forEach(option => {
    const optionName = option.previousElementSibling.innerText; // 获取选项名称（如“辣度：”）
    const optionValue = option.value; // 获取选项值（如“微辣”）
    selectedOptions[optionName] = optionValue; // 存储到 selectedOptions 对象中
  });

  // 检查是否有选择餐品
  if (selectedItems.length > 0) {
    // 显示确认信息
    alert(`已选择餐品：${selectedItems.join(', ')}\n定制选项：${JSON.stringify(selectedOptions)}`);
  } else {
    // 提示用户未选择餐品
    alert('请先选择餐品！');
  }
});