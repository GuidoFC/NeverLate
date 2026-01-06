import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface TableUser {
  id: number;
  firstName: string;
  lastName: string;
  secondLastName?: string; // opcional
  role: string;
  email: string;
}


const ELEMENT_DATA: TableUser[] = [
  {
    id: 1,
    firstName: 'Alex',
    lastName: 'Moldovar',
    secondLastName: 'Moldovar',
    role: 'Admin',
    email: 'alex@alex.com'
  },
  {
    id: 2,
    firstName: 'Guido',
    lastName: 'Figueroa',
    secondLastName: 'Figueroa',
    role: 'Responsable',
    email: 'guido@guido.com'
  },
  {
    id: 3,
    firstName: 'Danylo',
    lastName: 'Ruso',
    secondLastName: 'Ruso',
    role: 'Prácticas',
    email: 'danylo@danylo.com'
  }
];


@Component({
  selector: 'user-page',
  imports: [
    MatTableModule
  ],
  standalone: true,
  templateUrl: './user-page.html',
  styles: ``,
})
export default class UserPage {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
