import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'announcement',
  templateUrl: './announcement.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnouncementComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}
