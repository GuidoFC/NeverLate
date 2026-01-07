import {Component, effect, inject, input, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {TableUser} from '../../interface/interface-tableUser';
import {MatDialog} from '@angular/material/dialog';
import {AddUserDialog} from './users-table-dialog/add-user-dialog';


@Component({
  selector: 'users-table',
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSort,
  ],
  standalone: true,
  templateUrl: './users-table.component.html',
  styles: ``,
})
export class UsersTableComponent {

  dataUser = input.required<TableUser[]>()
  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'secondLastName', 'role', 'email'];
  // MatTableDataSource es una clase de angular materia que me permite insertar los datos en la tabla.
  // gracias a esta clase puedo paginar, filtrar y ordenar.
  // inicializamos la tabla vacia
  tableUsersDataSource = new MatTableDataSource<TableUser>([]);

  totalElements = 0;

  constructor() {
    effect(() => {
      this.tableUsersDataSource.data = this.dataUser();
      this.totalElements = this.dataUser().length;
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(AddUserDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


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
