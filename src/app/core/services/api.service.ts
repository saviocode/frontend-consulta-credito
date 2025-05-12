import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credito } from '../../shared/models/credito.model';
import { environment }  from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = `${environment.apiUrl}/creditos`;

  constructor(private http: HttpClient) {}

buscarPorNfse(nfse: string): Observable<Credito[]> {
  return this.http.get<Credito[]>(`${this.base}/${nfse}`);
}

buscarPorNumero(numero: string): Observable<Credito> {
  return this.http.get<Credito>(`${this.base}/credito/${numero}`);
}
}
