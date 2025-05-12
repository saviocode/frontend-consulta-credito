// src/app/consulta/components/busca-credito/busca-credito.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Credito }    from '../../../shared/models/credito.model';
import { MatSnackBar } from '@angular/material/snack-bar';

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-busca-credito',
  templateUrl: './busca-credito.component.html',
  styleUrls: ['./busca-credito.component.scss'],
  standalone: false
})
export class BuscaCreditoComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  error: string | null = null;
  credito?: Credito;
  skeletonLoading = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      numeroCredito: ['', [
        Validators.required,
        Validators.pattern(/^\d{6}$/)
      ]]
    });
  }

  buscar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.error = null;
    this.credito = undefined;
    this.loading = true;

    this.api.buscarPorNumero(this.form.value.numeroCredito)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: dto => this.credito = dto,
        error: () => this.error = 'Crédito não encontrado'
      });
  }
}
