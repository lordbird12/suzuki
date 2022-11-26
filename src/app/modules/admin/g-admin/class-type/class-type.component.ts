import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'class-type',
  templateUrl: './class-type.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassTypeComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}
