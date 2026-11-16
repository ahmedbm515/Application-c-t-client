import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  nombreNotifications: number = 2;

  afficherNotifications(): void {
    alert('Vous avez ' + this.nombreNotifications + ' nouvelles notifications.');
  }

}