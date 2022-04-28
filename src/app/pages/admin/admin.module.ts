import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {SharedModule} from '@shared/shared.module';
import {CreateSightPageComponent} from './create-sight-page/create-sight-page.component';
import {EditSightComponent} from './edit-sight/edit-sight.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: '/admin/sights/dashboard',
            pathMatch: 'full',
          },
          {path: 'sights/dashboard', component: DashboardPageComponent},
          {path: 'sights/create', component: CreateSightPageComponent},
          {path: 'sights/edit/:id', component: EditSightComponent},
          {path: 'users/dashboard', component: UserListComponent},
        ],
      },
    ]),
    SharedModule,
  ],
  exports: [RouterModule],
  declarations: [
    AdminLayoutComponent,
    CreateSightPageComponent,
    DashboardPageComponent,
    EditSightComponent,
    UserListComponent,
  ],
})
export class AdminModule {}
