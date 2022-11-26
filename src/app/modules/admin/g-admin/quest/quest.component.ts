import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quest',
  templateUrl: './quest.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}
