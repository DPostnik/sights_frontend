import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LayoutComponent} from '@components/layout/layout.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SearchComponent} from '@components/search/search.component';
import {CreateSightComponent} from '@components/forms/create-sight/create-sight.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {LoaderComponent} from '@components/loader/loader.component';
import {HeaderComponent} from '@components/header/header.component';
import {FooterComponent} from '@components/footer/footer.component';
import {DevMenuComponent} from '@components/devMenu/devMenu.component';
import {MapComponent} from '@components/map/map.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {TableComponent} from '@components/table/table.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    LayoutComponent,
    SearchComponent,
    CreateSightComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    DevMenuComponent,
    MapComponent,
    TableComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonModule,
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
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    SearchComponent,
    CreateSightComponent,
    MatChipsModule,
    MatAutocompleteModule,
    MatSelectModule,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    DevMenuComponent,
    MapComponent,
    MatTableModule,
    TableComponent,
    MatTooltipModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
