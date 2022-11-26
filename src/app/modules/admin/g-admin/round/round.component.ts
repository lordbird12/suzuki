import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'round',
  templateUrl: './round.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}
