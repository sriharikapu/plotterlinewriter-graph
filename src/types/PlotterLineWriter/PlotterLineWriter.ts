import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DrawLines extends EthereumEvent {
  get params(): DrawLinesParams {
    return new DrawLinesParams(this);
  }
}

export class DrawLinesParams {
  _event: DrawLines;

  constructor(event: DrawLines) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get x(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get y(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get p(): Array<boolean> {
    return this._event.parameters[3].value.toBooleanArray();
  }
}

export class PlotterLineWriter extends SmartContract {
  static bind(address: Address): PlotterLineWriter {
    return new PlotterLineWriter("PlotterLineWriter", address);
  }

  lastDrawingId(): BigInt {
    let result = super.call("lastDrawingId", []);
    return result[0].toBigInt();
  }

  startDrawingId(): BigInt {
    let result = super.call("startDrawingId", []);
    return result[0].toBigInt();
  }
}
