import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/images_svg/Delete.svg';
import { Paragraph } from 'components/atoms';
import './ProfilePhotoContent.scss';

const ProfilePhotoContent = ({
  values,
  setValues,
  defaultUrl,
  ButtonWidth,
  ButtonTextBeforeUpload,
}) => {
  const deletePhoto = () => setValues({ thumbUrl: '', icon: false });

  const Delete = () => {
    return (
      <div className='delete_photo_icon' onClick={deletePhoto}>
        <DeleteIcon />
      </div>
    );
  };

  return (
    <div className='profile_photo'>
      <div>
        <Paragraph color='#a4a4a4' fz={13} mb={0} width='149px'>
          Add a image
        </Paragraph>
        <Paragraph color='#a4a4a4' fz={10} mb={5}>
          The photo should be JPG or PNG
        </Paragraph>
        {values.icon ? <Delete /> : null}
      </div>
      <img alt='profile_Photo' src={values.thumbUrl || defaultUrl} />
    </div>
  );
};

export default ProfilePhotoContent;
