import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from 'src/app/state/app.state';
import { select, Store } from '@ngrx/store';
import { selectLoggedStatus, selectUserName, selectUserWalletAmount } from 'src/app/state/user/user.selectors';
import { tap } from 'rxjs';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  logged$ = this.store.pipe(select(selectLoggedStatus()));
  amount$ = this.store.pipe(select(selectUserWalletAmount()));
  userName$ = this.store.pipe(select(selectUserName()))

  constructor(private store: Store<AppState>, private userService: UserService){}

  login(){
    this.userService.login();
  }

}
