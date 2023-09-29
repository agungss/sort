import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {MatTableModule} from '@angular/material/table';



import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { MatSortModule } from '@angular/material/sort';
import { Sort } from '@angular/material/sort';



const MaterialComponents = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatTableModule,

  MatFormFieldModule,
  MatInputModule,

  MatSortModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
