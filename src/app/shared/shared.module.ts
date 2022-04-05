import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutComponent} from '../components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RouterModule,
        MatIconModule,
    ],
    exports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        LayoutComponent,
        RouterModule,
        MatIconModule,
        MatToolbarModule,
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
    ],
})
export class SharedModule {}
