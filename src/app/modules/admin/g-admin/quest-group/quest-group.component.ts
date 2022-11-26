import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quest-group',
  templateUrl: './quest-group.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestGroupComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}
