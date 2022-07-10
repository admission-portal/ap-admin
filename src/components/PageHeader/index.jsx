/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Divider } from 'antd';

export default function PageHeader({ title }) {
  return (
    <>
      <Typography.Title
        level={4}
        style={{ paddingTop: '0.7em', marginLeft: '0.6em' }}
      >
        {title}
      </Typography.Title>
      <Divider />
    </>
  );
}
