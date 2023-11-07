import React from 'react';
import { Card, Link, Paragraph } from '../index';

const NotFoundCard = ({ text }) => {
  return (
    <Card hide='header' b_align='center' bpadding='50px'>
      <Paragraph fz={32} align='center'>
        Sorry!
      </Paragraph>
      <Paragraph fz={18} align='center'>
        {text}
      </Paragraph>
      <Link to='/' type='primary' fz={18} t_decor='underline'>
        Back to Main Page
      </Link>
    </Card>
  );
};

export default NotFoundCard;
