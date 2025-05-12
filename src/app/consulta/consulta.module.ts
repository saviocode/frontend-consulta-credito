import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'; 

import { MatCardModule }         from '@angular/material/card';
import { MatFormFieldModule }    from '@angular/material/form-field';
import { MatInputModule }        from '@angular/material/input';
import { MatButtonModule }       from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule }     from '@angular/material/snack-bar';

import { MatTableModule }         from '@angular/material/table';        
import { MatPaginatorModule }     from '@angular/material/paginator';    
import { MatSortModule }          from '@angular/material/sort'; 



import { BuscaNfseComponent } from './components/busca-nfse/busca-nfse.component';
import { BuscaCreditoComponent } from './components/busca-credito/busca-credito.component';
import { ConsultaRountingModule } from './consulta-routing.module';

@NgModule({
  declarations: [BuscaNfseComponent, BuscaCreditoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,           
    ConsultaRountingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  exports: [RouterModule]
})
export class ConsultaModule {}
