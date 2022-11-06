import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.currentUser.subscribe(() => {
      const value = this.auth.currentUser.getValue();
      if (value !== null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }
  logout() {
    this.auth.logout();
  }
}
