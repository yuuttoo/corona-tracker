import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonRow, IonCol, IonImg, IonTitle, IonList, IonItem, IonCard, IonGrid } from '@ionic/react';
import moment from 'moment';
import axios from 'axios';
import './NewsTab.css';

interface INewsResponse {
  status: string;
  totalResults: number;
  articles: Array<IArticles>;
}

interface IArticles {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ISource {
  id: string;
  name: string;
}

const NewsTab: React.FC = () => {
  const [data, setData] = useState<IArticles[]>([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const getNewsData = async () => {
      
      const NEWS_API_KEY =  'YourKey';
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://newsapi.org/v2/top-headlines?q=coronavirus&language=en&apiKey="
      // const result = await axios('https://newsapi.org/v2/top-headlines?q=coronavirus&language=en&apiKey=' + NEWS_API_KEY);
      //const result = await axios(proxyurl + url + NEWS_API_KEY);
      const request = new Request(proxyurl + url + NEWS_API_KEY);
      fetch(request)
      .then(response => response.json())
      .then((result) => {
        console.log(result);
        setData(result.articles);
        setShowLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
    }
    getNewsData();
  }, []);

  function trimSourceDetails(source: string): string {
    return (source ? (source.split(' ')[1] ? source.split(' ')[0] + ' ' + source.split(' ')[1] : source.split(' ')[0]) : source);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NewsTab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NewsTab</IonTitle>
          </IonToolbar>
        </IonHeader>
            <IonList>
            {data.map((news, idx) => (
              <IonItem key={idx}>
                <IonCard>
                  <IonImg src={news?.urlToImage} class="newsImage" ></IonImg>
                  <IonGrid>
                    <IonRow class="newsTitle">{news?.title}</IonRow>
                    <IonRow class="newsSource">
                      <IonCol>{news?.source?.name}</IonCol>
                      <IonCol>{trimSourceDetails(news?.author)}</IonCol>
                      {/* <IonCol text-right>{moment(news?.publishedAt).format('DD MMM YYYY')}</IonCol> */}
                    </IonRow>
                    <IonRow class="newsContent">{news?.description}</IonRow>
                  </IonGrid>
                </IonCard>
              </IonItem>
            ))}
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NewsTab;
