import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';

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
    id: 2,
    firstName: 'GUIDO',
    lastName: 'Castro',
    secondLastName: '',
    role: 'Responsable',
    email: 'guido@guido.com'
  },
];


@Component({
  selector: 'user-page',
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatInputModule
  ],
  standalone: true,
  templateUrl: './user-page.html',
  styles: ``,
})
export default class UserPage {
  displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'secondLastName', 'role', 'email'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<TableUser>(ELEMENT_DATA);

  selection = new SelectionModel<TableUser>(true, []);

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
