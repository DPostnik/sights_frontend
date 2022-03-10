import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {MainLayoutComponent} from "./pages/main/main-layout/main-layout.component";
import {HomeComponent} from "./pages/main/home/home.component";
import {SightsMapComponent} from "./pages/main/sights-map/sights-map.component";
import {SightsListComponent} from "./pages/main/sights-list/sights-list.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'map', component: SightsMapComponent},
      {path: 'list', component: SightsListComponent},
    ],
  },
  {
    path: 'admin', loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminModule),
  },
  {
    path: 'auth', loadChildren: () => import('./pages/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {path: 'not-found', component: NotFoundPageComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
