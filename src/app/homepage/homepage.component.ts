import { Component, OnInit } from '@angular/core';
import {Designers} from '../designers';
import {HomepageService} from '../homepage.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  designers: Designers[];
  designer: Designers = new Designers();

  findDesigner(nameSearch: Designers): void {
    this.homepageService.getDesigner(nameSearch).subscribe(data => this.designers = data);
  }

  displayDesigners(): void {
    this.homepageService.allDesigners().subscribe(data => this.designers = data);
  }

  goBack(): void {
    this.location.back();
  }


  constructor(
    private homepageService: HomepageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.displayDesigners();
  }

}
