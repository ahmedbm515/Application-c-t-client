import { ConferenceModel } from './conference.model';

export class ConferenceList {

  conferences: ConferenceModel[] = [

    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découvrez Angular 21',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 30,
      nbParticipants: 5
    },

    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique Angular',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 20,
      nbParticipants: 14
    },

    {
      id: 3,
      title: 'Web Conference',
      description: 'Développement Web',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 20,
      nbParticipants: 20
    }

  ];

}