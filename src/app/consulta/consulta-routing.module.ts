import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaCreditoComponent } from './components/busca-credito/busca-credito.component';
import { BuscaNfseComponent } from './components/busca-nfse/busca-nfse.component';


const routes: Routes = [
 { path: 'nsfe', component: BuscaNfseComponent },
 { path: 'credito', component: BuscaCreditoComponent },
 { path: '**', component: BuscaNfseComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultaRountingModule { }