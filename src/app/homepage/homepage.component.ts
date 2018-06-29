import { Component, OnInit } from '@angular/core';
import {Designers} from '../designers';
import {HomepageService} from '../homepage.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { HttpResponse } from 'selenium-webdriver/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  designers: Designers[];
  designer: Designers = new Designers();
  error: string;

  findDesigner(nameSearch: Designers): void {
    this.homepageService.getDesigner(nameSearch).subscribe(data => this.designers = data);
  }

  displayDesigners(): void {
    this.homepageService.allDesigners().subscribe(data => this.designers = data, (err: string) => this.error = err);
  }

  filterResults(filter:Designers): void {
    this.homepageService.useFilters(filter).subscribe(data => this.designers = data);
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
