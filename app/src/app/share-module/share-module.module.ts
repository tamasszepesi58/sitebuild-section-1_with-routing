import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './shared-components/login/login.component';
import { RemoveLoginComponent } from './shared-components/remove-login/remove-login.component';
import { ProfileSmallComponent } from './shared-components/profiles/profile-small/profile-small.component';
import { ProfileMediumComponent } from './shared-components/profiles/profile-medium/profile-medium.component';
import { TableRowComponent } from './shared-components/table-row/table-header.component';
import { NavigationComponent } from './shared-components/navigation/navigation.component';
import { NavHeaderComponent } from './shared-components/nav-header/nav-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RemoveLoginComponent,
    ProfileSmallComponent,
    ProfileMediumComponent,
    TableRowComponent,
    NavigationComponent,
    NavHeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [CommonModule, LoginComponent,
    NavHeaderComponent,
    RemoveLoginComponent,
    ProfileSmallComponent,
    ProfileMediumComponent,
    TableRowComponent,
    NavigationComponent]
})
export class ShareModuleModule { }
