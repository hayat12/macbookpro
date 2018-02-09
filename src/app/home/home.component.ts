import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myroutes: any;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getNavigation();
  }
  getNavigation(){
    this.myroutes = this.activatedRoute.params.subscribe((params)=>{
      console.log(params.constructor);
    });
  }
}
