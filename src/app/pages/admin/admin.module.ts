import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {SharedModule} from '@shared/shared.module';

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
          {path: 'dashboard', component: AdminPageComponent},
        ],
      },
    ]),
    SharedModule,
  ],
  exports: [RouterModule],
  declarations: [AdminLayoutComponent],
})
export class AdminModule {}
