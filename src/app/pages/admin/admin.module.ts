import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {SharedModule} from '@shared/shared.module';
import {AdminCreateSightComponent} from './create-sight/admin-create-sight.component';
import {EditSightComponent} from './edit-sight/edit-sight.component';
import {UserListComponent} from './user-list/user-list.component';
import {AdminGuard} from '@store/guards/admin.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AdminGuard],
        children: [
          {
            path: '',
            redirectTo: '/admin/sights/dashboard',
            pathMatch: 'full',
          },
          {path: 'sights/dashboard', component: DashboardPageComponent},
          {path: 'sights/create', component: AdminCreateSightComponent},
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
    AdminCreateSightComponent,
    DashboardPageComponent,
    EditSightComponent,
    UserListComponent,
  ],
  providers: [AdminGuard],
})
export class AdminModule {}
