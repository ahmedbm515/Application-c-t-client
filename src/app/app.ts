import { Component } from '@angular/core';
import { ConferenceListComponent } from './components/conference-list/conference-list';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Profile } from './components/profile/profile';
import { Friends } from './components/friends/friends';
import { Notifications } from './components/notifications/notifications';
import { Footer } from './components/footer/footer';


@Component({
selector: 'app-root',
standalone: true,
  imports: [
    Header,
    Navbar,
    Profile,
    Friends,
    Notifications,
    ConferenceListComponent,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}