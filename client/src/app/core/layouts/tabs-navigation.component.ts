import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tabs-navigation',
  template: `
    <div class="btn-container">
      <button
        class="btn-employees"
        mat-raised-button
        color="primary"
        [routerLink]="['/employees']"
      >
        Employees
      </button>
      <button
        class="btn-managers"
        mat-raised-button
        color="primary"
        [routerLink]="['/managers']"
      >
        Managers
      </button>
    </div>
  `,
  styles: [
    `
      .btn-container {
        padding-top: 15px;
      }

      .btn-employees {
        margin: 0 5px;
      }

      .btn-managers {
        margin: 0 5px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsNavigationComponent {
  constructor() {}
}
