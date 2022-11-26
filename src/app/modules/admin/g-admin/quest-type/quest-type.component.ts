import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quest-type',
  templateUrl: './quest-type.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestTypeComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}
