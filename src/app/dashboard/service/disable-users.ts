import {Injectable, signal} from '@angular/core';
import {user_worker} from '../interface/interface-tableUser';

@Injectable({
  providedIn: 'root',
})
export class DisableUsers {
  private disableUsers = signal<user_worker[]>([])

  getAllDisableUsers(): user_worker[] {
    return this.disableUsers();
  }

  saveDisableUsers(listUSer: user_worker[]) {
    this.disableUsers.update(prev => [...prev, ...listUSer]);
  }
}
