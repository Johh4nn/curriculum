import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonFooter, IonAvatar, IonLabel, IonItem, IonList,
  IonIcon, IonChip, IonSegment, IonSegmentButton, IonButtons, IonButton, IonAccordionGroup,
  IonAccordion, IonProgressBar, IonFab, IonFabButton, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';

import {
  personCircleOutline,
  globeOutline,
  sendOutline,
  codeSlashOutline,
  barChartOutline,
  chatbubblesOutline,
  logoGithub
} from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonFooter, IonAvatar, IonLabel, IonItem, IonList,
    IonIcon, IonChip, IonSegment, IonSegmentButton, IonButtons, IonButton, IonAccordionGroup,
    IonAccordion, IonProgressBar, IonFab, IonFabButton, IonGrid, IonRow, IonCol
  ],
})
export class Tab2Page {
  activeSection = 'perfil';

  constructor() {
    addIcons({
      'person-circle-outline': personCircleOutline,
      'globe-outline': globeOutline,
      'send-outline': sendOutline,
      'code-slash-outline': codeSlashOutline,
      'bar-chart-outline': barChartOutline,
      'chatbubbles-outline': chatbubblesOutline,
      'logo-github': logoGithub
    });
  }

  onSegmentChange(event: CustomEvent) {
    this.activeSection = event.detail.value;
  }
}
