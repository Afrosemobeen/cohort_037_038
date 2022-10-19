import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-edit',
  templateUrl: './navbar-edit.component.html',
  styleUrls: ['./navbar-edit.component.scss']
})
export class NavbarEditComponent implements OnInit {
 error:any;
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  closeUserSetting(){
    this.router.navigate(['/'])

  }
}
