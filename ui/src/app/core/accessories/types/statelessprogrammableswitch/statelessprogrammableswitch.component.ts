import { Component, Input } from '@angular/core';
import { ServiceTypeX } from '@/app/core/accessories/accessories.interfaces';

@Component({
  selector: 'app-statelessprogrammableswitch',
  templateUrl: './statelessprogrammableswitch.component.html',
  styleUrls: ['./statelessprogrammableswitch.component.scss'],
})
export class StatelessprogrammableswitchComponent {
  @Input() public service: ServiceTypeX;

  constructor() {}
}
