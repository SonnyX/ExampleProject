import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoModule } from '@ngneat/transloco';
import { GRPC_GREETER_CLIENT_SETTINGS } from '../protos/greet.pbconf';
import { GreeterClient } from '../protos/greet.pbsc';
import { Configuration } from '../providers/configuration.provider';
import { grpcGreeterSettingsFactory } from '../providers/greeter-settings.provider';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [NgbModule, CommonModule, RouterModule, TranslocoModule, FormsModule, DashboardRoutingModule],
  providers: [
    {
      provide: GRPC_GREETER_CLIENT_SETTINGS,
      useFactory: grpcGreeterSettingsFactory,
      deps: [Configuration],
    },
    GreeterClient,
  ],
})
export class DashboardModule {}
