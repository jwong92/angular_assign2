import { Component, OnInit } from '@angular/core';
import {Designers} from '../designers';
import {DetailsService} from '../details.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  designer: Designers[];
  name: string;
  id: number;
  error: string;

  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getId(): number {
    this.id = +this.route.snapshot.paramMap.get('id');
    return this.id;
  }

  viewDetails(): void {
    this.detailsService.getDetails(this.getId()).subscribe(data => this.designer = data, err => this.error = err);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.viewDetails();
  }

}
