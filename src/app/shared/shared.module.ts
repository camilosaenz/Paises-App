import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { appRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SidebarComponent, FooterComponent],
  exports: [SidebarComponent, FooterComponent],
  imports: [CommonModule, appRoutingModule],
})
export class SharedModule {}
