import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quest-sub-type',
  templateUrl: './quest-sub-type.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestSubTypeComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}
