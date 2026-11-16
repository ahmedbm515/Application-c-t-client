
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, DatePipe, UpperCasePipe } from '@angular/common';

import { ConferenceModel } from '../../models/conference.model';
import { ConferenceList } from '../../models/conference-list';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [FormsModule, NgClass, DatePipe, UpperCasePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceListComponent {

  conferenceData = new ConferenceList();

  conferences: ConferenceModel[] = this.conferenceData.conferences;

  recherche = '';

  selectedConference: ConferenceModel | null = null;

  get filteredConferences(): ConferenceModel[] {
    return this.conferences.filter(conference =>
      conference.title.toLowerCase().includes(
        this.recherche.toLowerCase()
      )
    );
  }

  placesRestantes(conference: ConferenceModel): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  inscrire(conference: ConferenceModel): void {
    if (this.placesRestantes(conference) > 0) {
      conference.nbParticipants++;
    }
  }

  selectionner(conference: ConferenceModel): void {
    this.selectedConference = conference;
  }
}
