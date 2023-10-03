import React, { useState } from 'react';
import './post.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const notificationsData = [
  {
    id: 1,
    NotificationTitle: 'Notification 1 Title',
    NotificationBody:
      'Notification 1 Body: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...',
    Date: 'September 18, 2023',
    Time: '2:30 PM',
  },
  {
    id: 2,
    NotificationTitle: 'Notification 2 Title',
    NotificationBody:
      'Notification 2 Body: Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    Date: 'September 18, 2023',
    Time: '2:30 PM',
  },
  {
    id: 3,
    NotificationTitle: 'Notification 2 Title',
    NotificationBody:
      'Notification 2 Body: Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    Date: 'September 18, 2023',
    Time: '2:30 PM',
  },
  {
    id: 4,
    NotificationTitle: 'Notification 2 Title',
    NotificationBody:
      'Notification 2 Body: Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    Date: 'September 18, 2023',
    Time: '2:30 PM',
  },
  {
    id: 5,
    NotificationTitle: 'Notification 2 Title',
    NotificationBody:
      'Notification 2 Body: Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    Date: 'September 18, 2023',
    Time: '2:30 PM',
  },
  // Add more notifications as needed
];

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const openDeleteDialog = (notification) => {
    setSelectedNotification(notification);
    setIsDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setSelectedNotification(null);
    setIsDeleteDialogOpen(false);
  };

  const handleDelete = () => {
    if (selectedNotification) {
      // Remove the selected notification from the array
      const updatedNotifications = notifications.filter(
        (notification) => notification.id !== selectedNotification.id
      );

      setNotifications(updatedNotifications);

      // Close the delete dialog
      closeDeleteDialog();
    }
  };

  return (
    <div className='NotificationItem'>
      {notifications.map((notification) => (
        <div className='Notification' key={notification.id}>
          <div className='InnerNotification'>
            <div className='NotificationDetails'>
              <span className='PostTitle'>{notification.NotificationTitle}</span>
              <div className='NotificationBody'>
                <span>{notification.NotificationBody}</span>
              </div>
            </div>
            <div className='DateAndTime'>
              <span className='Time'>{notification.Time}</span>
              <span className='date'>{notification.Date}</span>
            </div>
          </div>
          <div className='ActionButtons'>
            <span className='EditIcon'>
              <EditIcon className='EditIcon' />
            </span>
            <span
              className='DeleteIcon'
              onClick={() => openDeleteDialog(notification)}
            >
              <DeleteOutlinedIcon className='IconDelete' />
            </span>
          </div>
        </div>
      ))}
      {/* Delete confirmation dialog */}
      {isDeleteDialogOpen && (
        <div className='DeleteConfirmationDialog'>
          <div className='WarningMessage'>
            <p className='NoticeText'>Are you sure you want to delete this message?</p>
            <div className='ButtonsConatiner'> 
                  <button onClick={handleDelete} className='YesBtn'>Yes</button>
                  <button onClick={closeDeleteDialog}>No</button>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
