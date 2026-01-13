import {inject, Injectable, signal} from '@angular/core';
import {user_worker} from '../interface/interface-tableUser';
import {DisableUsers} from './disable-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public DisableUserService = inject(DisableUsers);

  private users = signal<user_worker[]>([
    {
      id: 1,
      firstName: 'Antonio',
      lastName: 'García',
      secondLastName: 'López',
      role: 'Admin',
      email: 'antonio.garcia@gestoria.com'
    },
    {
      id: 2,
      firstName: 'Carmen',
      lastName: 'Martínez',
      secondLastName: 'Ruiz',
      role: 'Responsable',
      email: 'carmen.martinez@gestoria.com'
    },
    {
      id: 3,
      firstName: 'Javier',
      lastName: 'Serrano',
      secondLastName: 'Pérez',
      role: 'Usuario',
      email: 'javier.serrano@gestoria.com'
    },
    {
      id: 4,
      firstName: 'Lucía',
      lastName: 'Navarro',
      secondLastName: 'Gómez',
      role: 'Usuario',
      email: 'lucia.navarro@gestoria.com'
    },
    {
      id: 5,
      firstName: 'Miguel',
      lastName: 'Ortega',
      secondLastName: 'Santos',
      role: 'Responsable',
      email: 'miguel.ortega@gestoria.com'
    },
    {
      id: 6,
      firstName: 'Elena',
      lastName: 'Vega',
      secondLastName: 'Moreno',
      role: 'Usuario',
      email: 'elena.vega@gestoria.com'
    },
    {
      id: 7,
      firstName: 'David',
      lastName: 'Ramos',
      secondLastName: 'Castro',
      role: 'Usuario',
      email: 'david.ramos@gestoria.com'
    },
    {
      id: 8,
      firstName: 'Laura',
      lastName: 'Campos',
      secondLastName: 'Iglesias',
      role: 'Admin',
      email: 'laura.campos@gestoria.com'
    },
    {
      id: 9,
      firstName: 'Pablo',
      lastName: 'Hernández',
      secondLastName: 'Gil',
      role: 'Usuario',
      email: 'pablo.hernandez@gestoria.com'
    },
    {
      id: 10,
      firstName: 'Sara',
      lastName: 'Molina',
      secondLastName: 'Rey',
      role: 'Prácticas',
      email: 'sara.molina@gestoria.com'
    },
    {
      id: 11,
      firstName: 'Álvaro',
      lastName: 'Domínguez',
      secondLastName: 'Cruz',
      role: 'Usuario',
      email: 'alvaro.dominguez@gestoria.com'
    },
    {
      id: 12,
      firstName: 'Marta',
      lastName: 'Pardo',
      secondLastName: 'Vidal',
      role: 'Responsable',
      email: 'marta.pardo@gestoria.com'
    },
    {
      id: 13,
      firstName: 'Raúl',
      lastName: 'Blanco',
      secondLastName: 'Nieto',
      role: 'Usuario',
      email: 'raul.blanco@gestoria.com'
    },
    {
      id: 14,
      firstName: 'Natalia',
      lastName: 'Fuentes',
      secondLastName: 'León',
      role: 'Usuario',
      email: 'natalia.fuentes@gestoria.com'
    },
    {
      id: 15,
      firstName: 'Isabel',
      lastName: 'Cano',
      secondLastName: 'Flores',
      role: 'Admin',
      email: 'isabel.cano@gestoria.com'
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

  deleteUSer(listUserWorkers: user_worker[]) {
    // TODO antes de borrar el usuario, tendria que guardarlo en un Servicio de Usuarios deshabilitados
    this.DisableUserService.saveDisableUsers(listUserWorkers)
    // Crear un set con los IDs de los usuaruis que quiero eliminar
    const idsToRemove = new Set(listUserWorkers.map(u => u.id));

    // Actualizar la signal eliminándolos
    this.users.update(prev =>
      prev.filter(user => !idsToRemove.has(user.id))
    );
  }

}
