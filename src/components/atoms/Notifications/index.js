import { notification } from 'antd';

notification.config({
  placement: 'topRight',
  top: 150,
  duration: 5,
});

const openNotification = (type, description) => {
  notification[type]({
    description,
    style: {
      border: 'none',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#F6F9FC',
      color: '#101D5B',
      zIndex: '9',
    },
  });
};

const warning = description => openNotification('warning', description);
const success = description => openNotification('success', description);

const Notification = { warning, success };

export default Notification;
