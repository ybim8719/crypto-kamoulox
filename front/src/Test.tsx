import React from 'react'
import 'antd/dist/antd.css';
import './index.css';
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
  } from '@ant-design/icons';
import { Space } from 'antd';
import { Col, Row } from 'antd';
import classes from './Test.module.css';

 
const Test: React.FC = () => (
    <>
        <Row className={classes.bgBlue}>
            <Col  span={24}>col</Col>
        </Row>
        <Row className={classes.bgBlue}>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
        <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
        </Row>
        <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
        </Row>
        <Space className={classes.bgBlue}>
            <HomeOutlined style={{ fontSize: '100px', color: '#08c' }}/>
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />
        </Space>
    </>
);

export default Test;
