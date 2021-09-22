import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Configuration } from './providers/configuration.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'ExampleDomain';
  public breakpoint: string;
  public mobile: boolean;

  constructor(
    private config: Configuration,
    private translocoService: TranslocoService,
  ) {}

  async ngOnInit() {
  }


  initialize() {

  }
}
