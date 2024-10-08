import { Component, Input } from '@angular/core';
import { ServiceTypeX } from '@/app/core/accessories/accessories.interfaces';

@Component({
  selector: 'app-airqualitysensor',
  templateUrl: './airqualitysensor.component.html',
  styleUrls: ['./airqualitysensor.component.scss'],
})
export class AirqualitysensorComponent {
  @Input() public service: ServiceTypeX;

  public labels = ['Unknown', 'Excellent', 'Good', 'Fair', 'Inferior', 'Poor'];

  constructor() {}
}
