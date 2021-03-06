import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '@pages/not-found/not-found.component';
import {MainLayoutComponent} from '@pages/main/main-layout/main-layout.component';
import {HomeComponent} from '@pages/main/home/home.component';
import {SightsMapComponent} from '@pages/main/sights-map/sights-map.component';
import {SightsListComponent} from '@pages/main/sights-list/sights-list.component';
import {SightsInfoComponent} from '@pages/main/sight-info/sights-info.component';
import {SuggestSightComponent} from '@pages/main/suggest-sight/suggest-sight.component';
import {AccountPageComponent} from '@pages/main/account-page/account-page.component';
import {UserGuard} from '@guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'map', component: SightsMapComponent},
      {path: 'list', component: SightsListComponent},
      {path: 'suggest', component: SuggestSightComponent},
      {path: 'sight/:id', component: SightsInfoComponent},
      {path: 'account', component: AccountPageComponent, canActivate: [UserGuard]},
    ],
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  // todo u
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {path: 'not-found', component: NotFoundComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
