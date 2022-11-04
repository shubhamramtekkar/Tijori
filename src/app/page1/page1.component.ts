import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  addToCart() {
    this.commonService.sendClickEvent('add');
  }
}
