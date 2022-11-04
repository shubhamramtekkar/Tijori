import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartCount = 0;

  constructor(private commonService: CommonService) {
    this.commonService.getClickEvent().subscribe(() => {
      this.getCartData();
    });
  }

  ngOnInit(): void {}

  getCartData() {
    this.cartCount = this.cartCount + 1;
  }
}
