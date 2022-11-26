import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'round-time',
  templateUrl: './round-time.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundTimeComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}
