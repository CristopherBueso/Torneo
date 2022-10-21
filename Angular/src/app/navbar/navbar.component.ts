import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private readonly router : Router) { }

  ngOnInit(): void {
  }

  ring1(): void {
    this.router.navigate(['ring'], {queryParams : { ring: '1'}});
  }
  ring2(): void {
    this.router.navigate(['ring'], {queryParams : { ring: '2'}});
  }
  ring3(): void {
    this.router.navigate(['ring'], {queryParams : { ring: '3'}});
  }
}
