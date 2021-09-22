import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Translation, translocoConfig, TranslocoLoader, TranslocoModule, TRANSLOCO_CONFIG, TRANSLOCO_LOADER, TRANSLOCO_LOADING_TEMPLATE } from '@ngneat/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}
  getTranslation(langPath: string) {
    return this.http.get<Translation>(`./assets/i18n/${langPath}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  imports: [MatProgressSpinnerModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['nl'],
        defaultLang: 'nl',
        fallbackLang: 'nl',
        // TODO: set to true when we allow changing to other languages
        reRenderOnLangChange: false
        // TODO: enable this for production
        // prodMode: environment.production
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    { provide: TRANSLOCO_LOADING_TEMPLATE, useValue: '<mat-spinner diameter="32"></mat-spinner>' }
  ]
})
export class TranslocoRootModule {}
