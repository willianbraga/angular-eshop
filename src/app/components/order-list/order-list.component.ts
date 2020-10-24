import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent implements OnInit {
  @Input() skip = 0;
  @Input() take = 5;
  @Input() search = '';
  @Input() status = ['confirmed'];
  public orders: any[] = null;

  constructor(
    private navCtrl: NavController,
    private service: DataService
  ) { }

  ngOnInit() {
    this
      .service
      .getOrders()
      .subscribe((res: any) => {
        this.orders = res;
      });
  }

  goToOrder(order) {
    this.navCtrl.navigateRoot(`/orders/${order}`);
  }

}
