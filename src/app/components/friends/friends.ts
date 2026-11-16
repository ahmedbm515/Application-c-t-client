import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [],
  templateUrl: './friends.html',
  styleUrl: './friends.css'
})
export class Friends {

  amis: string[] = ['Sami', 'Sarra', 'Amine'];

}