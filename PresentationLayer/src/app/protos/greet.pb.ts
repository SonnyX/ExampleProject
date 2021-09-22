/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export class HelloRequest implements GrpcMessage {
  static toBinary(instance: HelloRequest) {
    const writer = new BinaryWriter();
    HelloRequest.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new HelloRequest();
    HelloRequest.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: HelloRequest) {
    instance.name = instance.name || '';
  }

  static fromBinaryReader(instance: HelloRequest, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        case 1:
          instance.name = reader.readString();
          break;
        default:
          reader.skipField();
      }
    }

    HelloRequest.refineValues(instance);
  }

  static toBinaryWriter(instance: HelloRequest, writer: BinaryWriter) {
    if (instance.name) {
      writer.writeString(1, instance.name);
    }
  }

  private _name?: string;

  /**
   * Creates an object and applies default Protobuf values
   * @param HelloRequest value
   */
  constructor(value?: RecursivePartial<HelloRequest>) {
    value = value || {};
    this.name = value.name;
    HelloRequest.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  toObject() {
    return {
      name: this.name
    };
  }
  toJSON() {
    return this.toObject();
  }
}
export module HelloRequest {}
export class HelloReply implements GrpcMessage {
  static toBinary(instance: HelloReply) {
    const writer = new BinaryWriter();
    HelloReply.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new HelloReply();
    HelloReply.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: HelloReply) {
    instance.message = instance.message || '';
  }

  static fromBinaryReader(instance: HelloReply, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        case 1:
          instance.message = reader.readString();
          break;
        default:
          reader.skipField();
      }
    }

    HelloReply.refineValues(instance);
  }

  static toBinaryWriter(instance: HelloReply, writer: BinaryWriter) {
    if (instance.message) {
      writer.writeString(1, instance.message);
    }
  }

  private _message?: string;

  /**
   * Creates an object and applies default Protobuf values
   * @param HelloReply value
   */
  constructor(value?: RecursivePartial<HelloReply>) {
    value = value || {};
    this.message = value.message;
    HelloReply.refineValues(this);
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }
  toObject() {
    return {
      message: this.message
    };
  }
  toJSON() {
    return this.toObject();
  }
}
export module HelloReply {}
