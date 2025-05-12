import { NgModule }                        from '@angular/core';
import { BrowserModule }                   from '@angular/platform-browser';
import { BrowserAnimationsModule }         from '@angular/platform-browser/animations';
import { RouterModule }                    from '@angular/router';
import { HTTP_INTERCEPTORS }               from '@angular/common/http';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MatToolbarModule }                from '@angular/material/toolbar';
import { MatButtonModule }                 from '@angular/material/button';
import { MatIconModule }                   from '@angular/material/icon';
import { MatFormFieldModule }              from '@angular/material/form-field';
import { MatInputModule }                  from '@angular/material/input';
import { MatProgressSpinnerModule }        from '@angular/material/progress-spinner';
import { MatSnackBarModule }               from '@angular/material/snack-bar';
import { MatCardModule }                   from '@angular/material/card';

import { AppComponent }                    from './app.component';
import { SpinnerComponent }                from './shared/spinner/spinner.component';
import { ConsultaModule }                  from './consulta/consulta.module';
import { ErrorInterceptor }                from './core/interceptors/error.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { AppRountingModule } from './app-routing.module';

@NgModule({
  declarations: [ AppComponent, SpinnerComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule,
    ConsultaModule,
    AppRountingModule

  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,   multi: true },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}



