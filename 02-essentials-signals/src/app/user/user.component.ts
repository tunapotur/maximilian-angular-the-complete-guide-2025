import { Component, input, computed, output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
