import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class LineSet extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LineSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LineSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LineSet", id.toString(), this);
  }

  static load(id: string): LineSet | null {
    return store.get("LineSet", id) as LineSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get x(): Array<BigInt> {
    let value = this.get("x");
    return value.toBigIntArray();
  }

  set x(value: Array<BigInt>) {
    this.set("x", Value.fromBigIntArray(value));
  }

  get y(): Array<BigInt> {
    let value = this.get("y");
    return value.toBigIntArray();
  }

  set y(value: Array<BigInt>) {
    this.set("y", Value.fromBigIntArray(value));
  }

  get p(): Array<boolean> {
    let value = this.get("p");
    return value.toBooleanArray();
  }

  set p(value: Array<boolean>) {
    this.set("p", Value.fromBooleanArray(value));
  }
}
