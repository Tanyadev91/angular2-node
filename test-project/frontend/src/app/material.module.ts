import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatIconModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
    exports: [
      MatButtonModule,
      MatCardModule,
      MatGridListModule,
      MatToolbarModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSlideToggleModule,
      MatChipsModule,
      MatIconModule,
      MatSelectModule,
      MatDialogModule,
      MatSnackBarModule
    ]
})
export class MaterialModules { }

// export const MaterialModules = [
//   MatButtonModule,
//   MatCardModule,
//   MatGridListModule,
//   MatToolbarModule,
//   MatInputModule
// ];
