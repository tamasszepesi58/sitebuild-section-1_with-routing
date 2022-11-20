import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './share-module/shared-components/login/login.component';
import { NavigationComponent } from './share-module/shared-components/navigation/navigation.component';
import { ProfileMediumComponent } from './share-module/shared-components/profiles/profile-medium/profile-medium.component';
import { ProfileSmallComponent } from './share-module/shared-components/profiles/profile-small/profile-small.component';
import { RemoveLoginComponent } from './share-module/shared-components/remove-login/remove-login.component';
import { TableRowComponent } from './share-module/shared-components/table-row/table-header.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "remove-login", component: RemoveLoginComponent },
  { path: "table-row", component: TableRowComponent },
  { path: "medium-profile", component: ProfileMediumComponent },
  { path: "small-profile", component: ProfileSmallComponent },
  { path: "navigation", component: NavigationComponent },

  { path: '**', redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
