import {Injectable, signal} from '@angular/core';
import {user_worker} from '../interface/interface-tableUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private users = signal<user_worker[]>([
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
    },
    {
      id: 4,
      firstName: 'GUIDO',
      lastName: 'Castro',
      secondLastName: '',
      role: 'Responsable',
      email: 'guido.castro@empresa.com'
    },
    {
      id: 5,
      firstName: 'Laura',
      lastName: 'Martínez',
      secondLastName: 'Gómez',
      role: 'Admin',
      email: 'laura@empresa.com'
    },
    {
      id: 6,
      firstName: 'Carlos',
      lastName: 'Pérez',
      secondLastName: 'Ruiz',
      role: 'Usuario',
      email: 'carlos@empresa.com'
    },
    {
      id: 7,
      firstName: 'María',
      lastName: 'López',
      secondLastName: 'Sánchez',
      role: 'Responsable',
      email: 'maria@empresa.com'
    },
    {
      id: 8,
      firstName: 'Javier',
      lastName: 'García',
      secondLastName: 'Moreno',
      role: 'Usuario',
      email: 'javier@empresa.com'
    },
    {
      id: 9,
      firstName: 'Ana',
      lastName: 'Torres',
      secondLastName: 'Vidal',
      role: 'Prácticas',
      email: 'ana@empresa.com'
    },
    {
      id: 10,
      firstName: 'Sergio',
      lastName: 'Romero',
      secondLastName: 'Gil',
      role: 'Usuario',
      email: 'sergio@empresa.com'
    },
    {
      id: 11,
      firstName: 'Paula',
      lastName: 'Navarro',
      secondLastName: 'Iglesias',
      role: 'Responsable',
      email: 'paula@empresa.com'
    },
    {
      id: 12,
      firstName: 'Miguel',
      lastName: 'Ortega',
      secondLastName: 'Cruz',
      role: 'Usuario',
      email: 'miguel@empresa.com'
    },
    {
      id: 13,
      firstName: 'Lucía',
      lastName: 'Molina',
      secondLastName: 'Herrera',
      role: 'Prácticas',
      email: 'lucia@empresa.com'
    },
    {
      id: 14,
      firstName: 'David',
      lastName: 'Ramos',
      secondLastName: 'Flores',
      role: 'Usuario',
      email: 'david@empresa.com'
    },
    {
      id: 15,
      firstName: 'Elena',
      lastName: 'Vega',
      secondLastName: 'Campos',
      role: 'Responsable',
      email: 'elena@empresa.com'
    },
    {
      id: 16,
      firstName: 'Iván',
      lastName: 'Santos',
      secondLastName: 'León',
      role: 'Usuario',
      email: 'ivan@empresa.com'
    },
    {
      id: 17,
      firstName: 'Natalia',
      lastName: 'Cano',
      secondLastName: 'Pardo',
      role: 'Admin',
      email: 'natalia@empresa.com'
    },
    {
      id: 18,
      firstName: 'Rubén',
      lastName: 'Fuentes',
      secondLastName: 'Blanco',
      role: 'Usuario',
      email: 'ruben@empresa.com'
    },
    {
      id: 19,
      firstName: 'Clara',
      lastName: 'Rey',
      secondLastName: 'Méndez',
      role: 'Prácticas',
      email: 'clara@empresa.com'
    },
    {
      id: 20,
      firstName: 'Óscar',
      lastName: 'Nieto',
      secondLastName: 'Serrano',
      role: 'Usuario',
      email: 'oscar@empresa.com'
    }
  ]);


  getAllUser(): user_worker[] {
    return this.users();
  }

  saveUSer(user: user_worker) {
    // Todo antes de guardar, tendria que hacer comprobaciones
    // Todo tengo que hacer uso de signals para guardar la información
    // TODO comprobar que el email no se repite. Donde se hacen las comprobaciones? Formulario, servicio o backend??
    this.users.update((prev) => [...prev, user]);
  }

}
