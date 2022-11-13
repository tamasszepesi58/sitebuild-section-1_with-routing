import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './shared-components/login/login.component';
import { RemoveLoginComponent } from './shared-components/remove-login/remove-login.component';
import { ProfileSmallComponent } from './shared-components/profiles/profile-small/profile-small.component';
import { ProfileMediumComponent } from './shared-components/profiles/profile-medium/profile-medium.component';
import { TableHeaderComponent } from './shared-components/table-header/table-header.component';
import { NavigationComponent } from './shared-components/navigation/navigation.component';



@NgModule({
  declarations: [
    LoginComponent,
    RemoveLoginComponent,
    ProfileSmallComponent,
    ProfileMediumComponent,
    TableHeaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModuleModule { }
