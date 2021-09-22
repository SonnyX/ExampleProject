/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcClientSettings,
  GrpcEvent
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './greet.pb';
import { GRPC_GREETER_CLIENT_SETTINGS } from './greet.pbconf';
@Injectable({
  providedIn: 'root'
})
export class GreeterClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_GREETER_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('greet.Greeter', settings);
  }

  /**
   * Unary RPC. Emits messages and throws errors on non-zero status codes
   * @param thisProto.HelloRequest request
   * @param Metadata metadata
   * @return Observable<thisProto.HelloReply>
   */
  sayHello(
    requestData: thisProto.HelloRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.HelloReply> {
    return this.sayHello$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC. Emits data and status events; does not throw errors by design
   * @param thisProto.HelloRequest request
   * @param Metadata metadata
   * @return Observable<GrpcEvent<thisProto.HelloReply>>
   */
  sayHello$eventStream(
    requestData: thisProto.HelloRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.HelloReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/greet.Greeter/SayHello',
      requestData,
      requestMetadata,
      requestClass: thisProto.HelloRequest,
      responseClass: thisProto.HelloReply
    });
  }
}
