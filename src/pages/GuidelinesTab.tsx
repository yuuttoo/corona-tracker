import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonCard,  IonList, IonCardHeader, IonImg  } from '@ionic/react';
import moment from 'moment';
import './GuidelinesTab.css';

const GuidelinesTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GuidelinesTab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GuidelinesTab</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
   <IonCard>
     <iframe title="WHO" width="100%" height="200" src="https://www.youtube.com/embed/5jD2xd3Cv80"
       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
     </iframe>
   </IonCard>
   <IonCard>
     <IonCardHeader>Symptoms</IonCardHeader>
     <IonImg class="guidlineImages" src="assets/images/Symptoms2.png"></IonImg>
   </IonCard>
   <IonCard>
     <IonCardHeader>Diseases</IonCardHeader>
     <IonImg class="guidlineImages" src="assets/images/Symptoms.png"></IonImg>
   </IonCard>
   <IonCard>
     <IonCardHeader>Myths Busted</IonCardHeader>
     <IonImg class="guidlineImages" src="assets/images/Myth.jpeg"></IonImg>
   </IonCard>
   <IonCard>
     <IonCardHeader>Stress Distraction Tips</IonCardHeader>
     <IonImg class="guidlineImages" src="assets/images/Stress.jpg"></IonImg>
   </IonCard>
   <IonCard>
     <IonCardHeader>Stay Home</IonCardHeader>
     <IonImg class="guidlineImages" src="assets/images/SafeHands.jpeg"></IonImg>
   </IonCard>
</IonList>      </IonContent>
    </IonPage>
  );
};

export default GuidelinesTab;
