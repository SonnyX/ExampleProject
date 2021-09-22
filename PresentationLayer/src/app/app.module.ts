import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoService } from '@ngneat/transloco';
import { GRPC_CLIENT_FACTORY } from '@ngx-grpc/core';
import { GrpcWebClientFactory } from '@ngx-grpc/grpc-web-client';
import * as moment from 'moment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { configurationProvider } from './providers/configuration.provider';
import { TranslocoRootModule } from './transloco-root.module';
import {BreadcrumbModule} from 'xng-breadcrumb';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {};
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Core
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,

    // Module
    AppRoutingModule,
    TranslocoRootModule,
    HammerModule,
    BreadcrumbModule,

    // Material
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatNativeDateModule,
    MatIconModule,

    //Bootstrap
    NgbModule,

    // Shared
  ],
  providers: [
    configurationProvider,
    { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary, private adapter: DateAdapter<any>, private translocoService: TranslocoService) {
    library.addIconPacks(fas, fab);

    moment.locale(this.translocoService.getActiveLang());

    this.adapter.setLocale(moment.locale());
  }
}
