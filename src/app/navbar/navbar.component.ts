import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth : AuthService,
    private router : Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.seDeconnecter();
    this.router.navigate(['/cv']);
  }

}
