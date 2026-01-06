import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


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
];


@Component({
  selector: 'user-page',
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSort
  ],
  standalone: true,
  templateUrl: './user-page.html',
  styles: ``,
})
export default class UserPage {
  displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'secondLastName', 'role', 'email'];
  // MatTableDataSource es una clase de angular materia que me permite insertar los datos en la tabla.
  // gracias a esta clase puedo paginar, filtrar y ordenar.
  tableUsersDataSource = new MatTableDataSource<TableUser>(ELEMENT_DATA);

  // numero de elementos
  totalElements: number = ELEMENT_DATA.length;

  selection = new SelectionModel<TableUser>(true, []);

  // @ViewChild = acceder al HTML desde TS
// El operador "!" indica a TypeScript que esta propiedad
// será inicializada por Angular después de que la vista se renderice. De esta forma evitamos que
//   typescript se queje.
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // ngAfterViewInit se ejecuta después de que Angular renderiza el HTML
  // Asignas el paginator a la tabla
  // la tabla sabe qué paginator usar
  // Tod_o lo que venga de @ViewChild se usa en ngAfterViewInit
  ngAfterViewInit() {
    this.tableUsersDataSource.paginator = this.paginator;
    this.tableUsersDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    // event.target es el elemento del DOM que disparó el evento
    // para poder coger el valor del elemento que disparo el evento le tengo que decir a Typecript que es un elemento HTML
    // y luego con .value cojo su valor
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableUsersDataSource.filter = filterValue.trim().toLowerCase();

    // sirve para evitar errores, comprobamos que el paginator ya funciona (esta vinculado la pagina
    // con el paginator que hemos creado. El vinculo lo hemos creado en ngAfterViewInit())
    if (this.tableUsersDataSource.paginator) {
      // pone la pagina al indice 0
      this.tableUsersDataSource.paginator.firstPage();
    }
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableUsersDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.tableUsersDataSource.data);
  }

  /** The label for the checkbox on the passed row */
  // Mé_todo para las personas con problemas visuales.
  checkboxLabel(row?: TableUser): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


}
