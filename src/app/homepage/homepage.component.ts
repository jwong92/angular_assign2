import { Component, OnInit } from '@angular/core';
import {Designers} from '../designers';
// import {HomepageService} from '../homepage.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  designers: Designers[];

  displayDesigners(): void {
    // this.homepageService.allDesigners().subscribe(data => this.designers = data);
  }

  constructor(
    // private homepageService: HomepageService,
  ) { }

  ngOnInit() {
    this.displayDesigners();
  }

}
