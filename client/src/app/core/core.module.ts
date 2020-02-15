import { NgModule } from '@angular/core';
import { HeaderComponent } from './layouts/header.component';
import { TabsNavigationComponent } from './layouts/tabs-navigation.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, TabsNavigationComponent],
  imports: [
    RouterModule,
    MatButtonModule
  ],
  exports: [HeaderComponent, TabsNavigationComponent]
})
export class CoreModule {}
