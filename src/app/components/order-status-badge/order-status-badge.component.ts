import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-status-badge',
  templateUrl: './order-status-badge.component.html',
})
export class OrderStatusBadgeComponent implements OnInit {
  @Input() status = 'confirmed';

  constructor() { }

  ngOnInit() { }

}
