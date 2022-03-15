import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutComponent} from '../components/layout/layout.component';

@NgModule({
    declarations: [LayoutComponent],
    imports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule],
    exports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        LayoutComponent,
    ],
})
export class SharedModule {}
