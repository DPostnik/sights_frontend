import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {SharedModule} from '@shared/shared.module';
import {AdminCreateSightComponent} from './create-sight/admin-create-sight.component';
import {EditSightComponent} from './edit-sight/edit-sight.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: '/admin/dashboard',
            pathMatch: 'full',
          },
          {path: 'dashboard', component: DashboardPageComponent},
          {path: 'create', component: AdminCreateSightComponent},
          {path: 'edit/:id', component: EditSightComponent},
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
  ],
})
export class AdminModule {}
