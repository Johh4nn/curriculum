import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonFooter, IonAvatar, IonLabel, IonItem, IonList,
  IonIcon, IonChip, IonSegment, IonSegmentButton, IonButtons, IonButton, IonAccordionGroup,
  IonAccordion, IonProgressBar, IonFab, IonFabButton
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { 
  peopleCircleOutline,
  codeSlashOutline,
  globeOutline,
  sendOutline,
  documentTextOutline,
  briefcaseOutline,
  analyticsOutline,
  schoolOutline,
  personCircleOutline,
  downloadOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonFooter, IonAvatar, IonLabel, IonItem, IonList,
    IonIcon, IonChip, IonSegment, IonSegmentButton, IonButtons, IonButton, IonAccordionGroup,
    IonAccordion, IonProgressBar, IonFab, IonFabButton
  ],
})
export class Tab1Page {
  constructor() {
    addIcons({
      'people-circle-outline': peopleCircleOutline,
      'code-slash-outline': codeSlashOutline,
      'globe-outline': globeOutline,
      'send-outline': sendOutline,
      'document-text-outline': documentTextOutline,
      'briefcase-outline': briefcaseOutline,
      'analytics-outline': analyticsOutline,
      'school-outline': schoolOutline,
      'person-circle-outline': personCircleOutline,
      'download-outline': downloadOutline
    });
  }

  onSegmentChange(event: CustomEvent) {
    const sectionId = event.detail.value;
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
