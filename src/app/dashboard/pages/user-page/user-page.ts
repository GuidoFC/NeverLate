import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';


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
    MatPaginatorModule
  ],
  standalone: true,
  templateUrl: './user-page.html',
  styles: ``,
})
export default class UserPage {
  displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'secondLastName', 'role', 'email'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<TableUser>(ELEMENT_DATA);

  // numero de elementos
  totalElements: number = ELEMENT_DATA.length;

  selection = new SelectionModel<TableUser>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TableUser): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }




}
