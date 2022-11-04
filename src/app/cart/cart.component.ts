import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  clearCart() {
    this.commonService.sendClickEvent('clear');
  }
}
