import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LayoutComponent} from '../components/layout/layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatOptionModule} from '@angular/material/core';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatOptionModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatPaginatorModule,
    LayoutComponent,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatOptionModule,
  ],
})
export class SharedModule {}
