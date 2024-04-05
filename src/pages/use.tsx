import React from 'react';
import Carousel from './Carousel';
import Login from './Login';
import { ConfigProvider, theme } from 'antd';

const IndexPage = () => {
  return (
    <>
      <Login />
      <h1
        style={{
          fontFamily: 'Impact, sans-serif',
          color: 'rgb(245, 34, 45)',
          textTransform: 'uppercase',
          textAlign: 'left',
          fontSize: '2.5em',
          paddingLeft: '8vw',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        Reading Helper
      </h1>
      <div className="heroBlurBall"></div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <Carousel />
      </div>
    </>
  );
};

export default (props) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: 'rgb(235, 47, 150)',
        },
      }}
    >
      <IndexPage {...props} />
    </ConfigProvider>
  );
};