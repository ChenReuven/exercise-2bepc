import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <img class="header__image" src="../assets/images/2bepercise.png" />
      <h2>Organization Managment Application</h2>
    </header>
  `,
  styles: [
    `
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .header__image {
        width: 70px;
        margin-right: 15px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor() {}
}
