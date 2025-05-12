import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { LoadingService } from '../../../core/services/loading.service';
import { Credito } from '../../../shared/models/credito.model';

@Component({
  selector: 'app-busca-nfse',
  templateUrl: './busca-nfse.component.html',
  styleUrls: ['./busca-nfse.component.scss'],
  standalone: false
})
export class BuscaNfseComponent implements OnInit {
  form!: FormGroup;
  creditos: Credito[] = [];
  error: string | null = null;

  skeletonLoading = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nfse: ['', [
        Validators.required,
        Validators.pattern(/^\d{7,}$/)  
      ]]
    });
  }

  buscar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.error = null;
    this.creditos = [];

    this.skeletonLoading = true;
    this.loadingService.show();

    this.api.buscarPorNfse(this.form.value.nfse).pipe(
      finalize(() => {
        this.skeletonLoading = false;
        this.loadingService.hide();
      })
    ).subscribe({
      next: data => {
        this.creditos = data;
      },
      error: () => {
        this.error = 'Falha ao buscar NFS-e. Tente novamente mais tarde.';
      }
    });
  }
}
