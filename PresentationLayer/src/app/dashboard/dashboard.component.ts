import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelloRequest, HelloReply } from '../protos/greet.pb';
import { GreeterClient } from '../protos/greet.pbsc';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  public reply : string = "Reply of HelloRequest will show here";

  constructor(private greeter: GreeterClient) {
  }

  ngOnInit(): void {
    this.sayHello();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  sayHello(): void {
    let subscription: Subscription = this.greeter.sayHello(new HelloRequest({name: "MyName"})).subscribe(
      (result: HelloReply) => {
        this.reply = result.message;
        console.log(result.message);
      },
      (error: any) => {
        console.error(error);
      }
    );

    this.subscriptions.add(subscription);
  }

}
