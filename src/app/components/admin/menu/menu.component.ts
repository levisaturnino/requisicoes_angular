import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user: Observable<firebase.User | null> | undefined;

  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authServ.authUser();
  }

  sair() {
    this.authServ.logout().then(() => this.router.navigate(['/']));
  }


}
