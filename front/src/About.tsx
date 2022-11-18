import React from 'react'
import { Col, Card } from 'antd';
import icon from './images/scrooge-logo.jpg';
import 'antd/dist/antd.css';


function About() {

  console.log(process.env.REACT_APP_LOCAL_API_BASE_URL)
  return (
    <div>
      <Col xs={24} sm={12} lg={8}>
          <Card hoverable className="news-card">
            <a href="/" target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <h3 className="news-title">MON CUL C DY OIYKIET</h3>
                <img src={icon} alt="" />
              </div>
              <p>djideqj sef sef sf sef sef sef sefse sfees es es</p>
              <div className="provider-container">
                <div>
                  <p>Voici un acatar</p>
                  <p>CIYCfjsehfsuh hfs  s sef sefesfefseef</p>
                </div>
                <p>Publié il ya 10 j</p>
              </div>
            </a>
          </Card>
        </Col>
    </div>
  )
}

export default About