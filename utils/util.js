const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const callWXFn = (fnName) => {
  if (wx[fnName]) {
    return wx[fnName];
  }
  try {
    wx[fnName]()
  } catch (e) {
    console.group('%c%s', 'color:red;', '未找到微信内部方法');
    console.log('%c%s', 'color:red;', `${e.message}`);
    console.log('%c%s', 'color:red;', `fnName --> ${fnName}`);
    console.groupEnd();
  }
  wx.showModal({
    title: '提示',
    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
  });
}

module.exports = {
  formatTime,
  callWXFn
}
