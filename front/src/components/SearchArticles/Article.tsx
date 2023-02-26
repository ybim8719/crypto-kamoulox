import React from 'react';
import { Col, Card } from 'antd';
import icon from './../../images/scrooge-logo.jpg';
import 'antd/dist/antd.css';
import { ArticleModel } from '../../models/article';

// category : "https://www.zonebourse.com/cours/action/IMMO-BLOCKCHAIN-36939162/actualite/Immo-Blockchain-IMMO-BLOCKCHAIN-developpe-son-pole-event-avec-le-lancement-commercial-de-La-42722137/"
// contentUrl : "https://www.bing.com/th?id=OVFT.vickNJNQK98VJq-r-RKe4C&pid=News"
// datePublished :"2023-01-12T16:50:00.0000000Z"
// description : "IMMO BLOCKCHAIN , groupe associant gestion dynamique d'actifs fonciers propriétaires et solutions d'« Hospitality » annonce le lancement commercial d'un nouveau... | 12 janvier 2023"
// height : 465
// title : "Immo Blockchain : IMMO BLOCKCHAIN développe son pôle \"event\" avec le lancement commercial de La Ferme de Corde"
// url : "https://www.zonebourse.com/cours/action/IMMO-BLOCKCHAIN-36939162/actualite/Immo-Blockchain-IMMO-BLOCKCHAIN-developpe-son-pole-event-avec-le-lancement-commercial-de-La-42722137/"
// width : 700

const Article: React.FC<{article: ArticleModel}> = (props) => {
    const {article} = props;
    return (
      <Col xs={24} sm={12} lg={8}>
        <Card hoverable className="news-card">
          <a href={article.url} target="_blank" rel="noreferrer">
            <div className="news-image-container">
              <h3 className="news-title">{article.title}</h3>
              <img src={article.image?.contentUrl} alt="" />
            </div>
            <p>{article.description}</p>
            <div className="provider-container">
              <div>
                <p>Voici un avatar</p>
                <p>CIYCfjsehfsuh hfs  s sef sefesfefseef</p>
              </div>
              <p>Publié il ya 10 j</p>
            </div>
          </a>
        </Card>
      </Col>
    )
}


export default Article;