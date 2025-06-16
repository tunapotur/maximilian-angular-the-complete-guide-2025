import {
  Component,
  Output,
  EventEmitter,
  input,
  computed,
} from '@angular/core';

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
  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
