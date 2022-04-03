import { PickForFixedLength3x3, PickForFixedLength4x4 } from "./FixedArray";
import { Tuple3, Tuple3x3, Tuple4, Tuple4x4 } from "./Tuple";
import { Vec3, Vec4 } from "./Vector";

export class Mat3 extends PickForFixedLength3x3 implements Tuple3x3 {
  constructor(m: Tuple3x3) {
    super();
    this[0] = m[0];
    this[1] = m[1];
    this[2] = m[2];
  }

  get _00() {
    return this[0][0];
  }
  get _01() {
    return this[0][1];
  }
  get _02() {
    return this[0][2];
  }
  get _10() {
    return this[1][0];
  }
  get _11() {
    return this[1][1];
  }
  get _12() {
    return this[1][2];
  }
  get _20() {
    return this[2][0];
  }
  get _21() {
    return this[2][1];
  }
  get _22() {
    return this[2][2];
  }
  set _00(val) {
    this[0][0] = val;
  }
  set _01(val) {
    this[0][1] = val;
  }
  set _02(val) {
    this[0][2] = val;
  }
  set _10(val) {
    this[1][0] = val;
  }
  set _11(val) {
    this[1][1] = val;
  }
  set _12(val) {
    this[1][2] = val;
  }
  set _20(val) {
    this[2][0] = val;
  }
  set _21(val) {
    this[2][1] = val;
  }
  set _22(val) {
    this[2][2] = val;
  }

  add(m: Tuple3x3) {
    return new Mat3([
      [this[0][0] + m[0][0], this[0][1] + m[0][1], this[0][2] + m[0][2]],
      [this[1][0] + m[1][0], this[1][1] + m[1][1], this[1][2] + m[1][2]],
      [this[2][0] + m[2][0], this[2][1] + m[2][1], this[2][2] + m[2][2]],
    ]);
  }
  sub(m: Tuple3x3) {
    return new Mat3([
      [this[0][0] - m[0][0], this[0][1] - m[0][1], this[0][2] - m[0][2]],
      [this[1][0] - m[1][0], this[1][1] - m[1][1], this[1][2] - m[1][2]],
      [this[2][0] - m[2][0], this[2][1] - m[2][1], this[2][2] - m[2][2]],
    ]);
  }
  muli(i: number) {
    return new Mat3([
      [this[0][0] * i, this[0][1] * i, this[0][2] * i],
      [this[1][0] * i, this[1][1] * i, this[1][2] * i],
      [this[2][0] * i, this[2][1] * i, this[2][2] * i],
    ]);
  }
  mulv(v: Tuple3) {
    return new Vec3([
      new Vec3(this[0]).dot(v),
      new Vec3(this[1]).dot(v),
      new Vec3(this[2]).dot(v),
    ]);
  }
  mul(m: Tuple3x3) {
    const t = (m instanceof Mat3 ? m : new Mat3(m)).transpose();
    return new Mat3([t.mulv(this[0]), t.mulv(this[1]), t.mulv(this[2])]);
  }

  transpose() {
    return new Mat3([
      [this[0][0], this[1][0], this[2][0]],
      [this[0][1], this[1][1], this[2][1]],
      [this[0][2], this[1][2], this[2][2]],
    ]);
  }

  det() {
    return (
      this[0][0] * (this[1][1] * this[2][2] - this[1][2] * this[2][1]) +
      this[0][1] * (this[1][2] * this[2][0] - this[1][0] * this[2][2]) +
      this[0][2] * (this[1][0] * this[2][1] - this[1][1] * this[2][0])
    );
  }

  inverse() {
    const d = this.det();
    if (d === 0) {
      console.error("inverse() might be singular.");
    }
    const s = 1 / d;
    return new Mat3([
      [
        (this[1][1] * this[2][2] - this[2][1] * this[1][2]) * s,
        (this[0][2] * this[2][1] - this[0][1] * this[2][2]) * s,
        (this[0][1] * this[1][2] - this[0][2] * this[1][1]) * s,
      ],
      [
        (this[1][2] * this[2][0] - this[1][0] * this[2][2]) * s,
        (this[0][0] * this[2][2] - this[0][2] * this[2][0]) * s,
        (this[1][0] * this[0][2] - this[0][0] * this[1][2]) * s,
      ],
      [
        (this[1][0] * this[2][1] - this[2][0] * this[1][1]) * s,
        (this[2][0] * this[0][1] - this[0][0] * this[2][1]) * s,
        (this[0][0] * this[1][1] - this[1][0] * this[0][1]) * s,
      ],
    ]);
  }
}

export class Mat4 extends PickForFixedLength4x4 implements Tuple4x4 {
  constructor(m: Tuple4x4) {
    super();
    this[0] = m[0];
    this[1] = m[1];
    this[2] = m[2];
    this[3] = m[3];
  }

  get _00() {
    return this[0][0];
  }
  get _01() {
    return this[0][1];
  }
  get _02() {
    return this[0][2];
  }
  get _03() {
    return this[0][3];
  }
  get _10() {
    return this[1][0];
  }
  get _11() {
    return this[1][1];
  }
  get _12() {
    return this[1][2];
  }
  get _13() {
    return this[1][3];
  }
  get _20() {
    return this[2][0];
  }
  get _21() {
    return this[2][1];
  }
  get _22() {
    return this[2][2];
  }
  get _23() {
    return this[2][3];
  }
  get _30() {
    return this[3][0];
  }
  get _31() {
    return this[3][1];
  }
  get _32() {
    return this[3][2];
  }
  get _33() {
    return this[3][3];
  }
  set _00(val) {
    this[0][0] = val;
  }
  set _01(val) {
    this[0][1] = val;
  }
  set _02(val) {
    this[0][2] = val;
  }
  set _03(val) {
    this[0][3] = val;
  }
  set _10(val) {
    this[1][0] = val;
  }
  set _11(val) {
    this[1][1] = val;
  }
  set _12(val) {
    this[1][2] = val;
  }
  set _13(val) {
    this[1][3] = val;
  }
  set _20(val) {
    this[2][0] = val;
  }
  set _21(val) {
    this[2][1] = val;
  }
  set _22(val) {
    this[2][2] = val;
  }
  set _23(val) {
    this[2][3] = val;
  }
  set _30(val) {
    this[3][0] = val;
  }
  set _31(val) {
    this[3][1] = val;
  }
  set _32(val) {
    this[3][2] = val;
  }
  set _33(val) {
    this[3][3] = val;
  }

  add(m: Tuple4x4) {
    return new Mat4([
      [
        this[0][0] + m[0][0],
        this[0][1] + m[0][1],
        this[0][2] + m[0][2],
        this[0][3] + m[0][3],
      ],
      [
        this[1][0] + m[1][0],
        this[1][1] + m[1][1],
        this[1][2] + m[1][2],
        this[1][3] + m[1][3],
      ],
      [
        this[2][0] + m[2][0],
        this[2][1] + m[2][1],
        this[2][2] + m[2][2],
        this[2][3] + m[2][3],
      ],
      [
        this[3][0] + m[3][0],
        this[3][1] + m[3][1],
        this[3][2] + m[3][2],
        this[3][3] + m[3][3],
      ],
    ]);
  }
  sub(m: Tuple4x4) {
    return new Mat4([
      [
        this[0][0] - m[0][0],
        this[0][1] - m[0][1],
        this[0][2] - m[0][2],
        this[0][3] - m[0][3],
      ],
      [
        this[1][0] - m[1][0],
        this[1][1] - m[1][1],
        this[1][2] - m[1][2],
        this[1][3] - m[1][3],
      ],
      [
        this[2][0] - m[2][0],
        this[2][1] - m[2][1],
        this[2][2] - m[2][2],
        this[2][3] - m[2][3],
      ],
      [
        this[3][0] - m[3][0],
        this[3][1] - m[3][1],
        this[3][2] - m[3][2],
        this[3][3] - m[3][3],
      ],
    ]);
  }
  muli(i: number) {
    return new Mat4([
      [this[0][0] * i, this[0][1] * i, this[0][2] * i, this[0][3] * i],
      [this[1][0] * i, this[1][1] * i, this[1][2] * i, this[1][3] * i],
      [this[2][0] * i, this[2][1] * i, this[2][2] * i, this[2][3] * i],
      [this[3][0] * i, this[3][1] * i, this[3][2] * i, this[3][3] * i],
    ]);
  }
  mulv(v: Tuple4) {
    return new Vec4([
      new Vec4(this[0]).dot(v),
      new Vec4(this[1]).dot(v),
      new Vec4(this[2]).dot(v),
      new Vec4(this[3]).dot(v),
    ]);
  }
  mul(m: Tuple4x4) {
    const t = (m instanceof Mat4 ? m : new Mat4(m)).transpose();
    return new Mat4([
      t.mulv(this[0]),
      t.mulv(this[1]),
      t.mulv(this[2]),
      t.mulv(this[3]),
    ]);
  }

  transpose() {
    return new Mat4([
      [this[0][0], this[1][0], this[2][0], this[3][0]],
      [this[0][1], this[1][1], this[2][1], this[3][1]],
      [this[0][2], this[1][2], this[2][2], this[3][2]],
      [this[0][3], this[1][3], this[2][3], this[3][3]],
    ]);
  }
  det() {
    return (
      this[3][0] * this[2][1] * this[1][2] * this[0][3] -
      this[2][0] * this[3][1] * this[1][2] * this[0][3] -
      this[3][0] * this[1][1] * this[2][2] * this[0][3] +
      this[1][0] * this[3][1] * this[2][2] * this[0][3] +
      this[2][0] * this[1][1] * this[3][2] * this[0][3] -
      this[1][0] * this[2][1] * this[3][2] * this[0][3] -
      this[3][0] * this[2][1] * this[0][2] * this[1][3] +
      this[2][0] * this[3][1] * this[0][2] * this[1][3] +
      this[3][0] * this[0][1] * this[2][2] * this[1][3] -
      this[0][0] * this[3][1] * this[2][2] * this[1][3] -
      this[2][0] * this[0][1] * this[3][2] * this[1][3] +
      this[0][0] * this[2][1] * this[3][2] * this[1][3] +
      this[3][0] * this[1][1] * this[0][2] * this[2][3] -
      this[1][0] * this[3][1] * this[0][2] * this[2][3] -
      this[3][0] * this[0][1] * this[1][2] * this[2][3] +
      this[0][0] * this[3][1] * this[1][2] * this[2][3] +
      this[1][0] * this[0][1] * this[3][2] * this[2][3] -
      this[0][0] * this[1][1] * this[3][2] * this[2][3] -
      this[2][0] * this[1][1] * this[0][2] * this[3][3] +
      this[1][0] * this[2][1] * this[0][2] * this[3][3] +
      this[2][0] * this[0][1] * this[1][2] * this[3][3] -
      this[0][0] * this[2][1] * this[1][2] * this[3][3] -
      this[1][0] * this[0][1] * this[2][2] * this[3][3] +
      this[0][0] * this[1][1] * this[2][2] * this[3][3]
    );
  }

  inverse() {
    const d = this.det();
    if (d === 0) {
      console.error("inverse() might be singular.");
    }
    const s = 1 / d;
    return new Mat4([
      [
        (this[2][1] * this[3][2] * this[1][3] -
          this[3][1] * this[2][2] * this[1][3] +
          this[3][1] * this[1][2] * this[2][3] -
          this[1][1] * this[3][2] * this[2][3] -
          this[2][1] * this[1][2] * this[3][3] +
          this[1][1] * this[2][2] * this[3][3]) *
          s,
        (this[3][1] * this[2][2] * this[0][3] -
          this[2][1] * this[3][2] * this[0][3] -
          this[3][1] * this[0][2] * this[2][3] +
          this[0][1] * this[3][2] * this[2][3] +
          this[2][1] * this[0][2] * this[3][3] -
          this[0][1] * this[2][2] * this[3][3]) *
          s,
        (this[1][1] * this[3][2] * this[0][3] -
          this[3][1] * this[1][2] * this[0][3] +
          this[3][1] * this[0][2] * this[1][3] -
          this[0][1] * this[3][2] * this[1][3] -
          this[1][1] * this[0][2] * this[3][3] +
          this[0][1] * this[1][2] * this[3][3]) *
          s,
        (this[2][1] * this[1][2] * this[0][3] -
          this[1][1] * this[2][2] * this[0][3] -
          this[2][1] * this[0][2] * this[1][3] +
          this[0][1] * this[2][2] * this[1][3] +
          this[1][1] * this[0][2] * this[2][3] -
          this[0][1] * this[1][2] * this[2][3]) *
          s,
      ],
      [
        (this[3][0] * this[2][2] * this[1][3] -
          this[2][0] * this[3][2] * this[1][3] -
          this[3][0] * this[1][2] * this[2][3] +
          this[1][0] * this[3][2] * this[2][3] +
          this[2][0] * this[1][2] * this[3][3] -
          this[1][0] * this[2][2] * this[3][3]) *
          s,
        (this[2][0] * this[3][2] * this[0][3] -
          this[3][0] * this[2][2] * this[0][3] +
          this[3][0] * this[0][2] * this[2][3] -
          this[0][0] * this[3][2] * this[2][3] -
          this[2][0] * this[0][2] * this[3][3] +
          this[0][0] * this[2][2] * this[3][3]) *
          s,
        (this[3][0] * this[1][2] * this[0][3] -
          this[1][0] * this[3][2] * this[0][3] -
          this[3][0] * this[0][2] * this[1][3] +
          this[0][0] * this[3][2] * this[1][3] +
          this[1][0] * this[0][2] * this[3][3] -
          this[0][0] * this[1][2] * this[3][3]) *
          s,
        (this[1][0] * this[2][2] * this[0][3] -
          this[2][0] * this[1][2] * this[0][3] +
          this[2][0] * this[0][2] * this[1][3] -
          this[0][0] * this[2][2] * this[1][3] -
          this[1][0] * this[0][2] * this[2][3] +
          this[0][0] * this[1][2] * this[2][3]) *
          s,
      ],
      [
        (this[2][0] * this[3][1] * this[1][3] -
          this[3][0] * this[2][1] * this[1][3] +
          this[3][0] * this[1][1] * this[2][3] -
          this[1][0] * this[3][1] * this[2][3] -
          this[2][0] * this[1][1] * this[3][3] +
          this[1][0] * this[2][1] * this[3][3]) *
          s,
        (this[3][0] * this[2][1] * this[0][3] -
          this[2][0] * this[3][1] * this[0][3] -
          this[3][0] * this[0][1] * this[2][3] +
          this[0][0] * this[3][1] * this[2][3] +
          this[2][0] * this[0][1] * this[3][3] -
          this[0][0] * this[2][1] * this[3][3]) *
          s,
        (this[1][0] * this[3][1] * this[0][3] -
          this[3][0] * this[1][1] * this[0][3] +
          this[3][0] * this[0][1] * this[1][3] -
          this[0][0] * this[3][1] * this[1][3] -
          this[1][0] * this[0][1] * this[3][3] +
          this[0][0] * this[1][1] * this[3][3]) *
          s,
        (this[2][0] * this[1][1] * this[0][3] -
          this[1][0] * this[2][1] * this[0][3] -
          this[2][0] * this[0][1] * this[1][3] +
          this[0][0] * this[2][1] * this[1][3] +
          this[1][0] * this[0][1] * this[2][3] -
          this[0][0] * this[1][1] * this[2][3]) *
          s,
      ],
      [
        (this[3][0] * this[2][1] * this[1][2] -
          this[2][0] * this[3][1] * this[1][2] -
          this[3][0] * this[1][1] * this[2][2] +
          this[1][0] * this[3][1] * this[2][2] +
          this[2][0] * this[1][1] * this[3][2] -
          this[1][0] * this[2][1] * this[3][2]) *
          s,
        (this[2][0] * this[3][1] * this[0][2] -
          this[3][0] * this[2][1] * this[0][2] +
          this[3][0] * this[0][1] * this[2][2] -
          this[0][0] * this[3][1] * this[2][2] -
          this[2][0] * this[0][1] * this[3][2] +
          this[0][0] * this[2][1] * this[3][2]) *
          s,
        (this[3][0] * this[1][1] * this[0][2] -
          this[1][0] * this[3][1] * this[0][2] -
          this[3][0] * this[0][1] * this[1][2] +
          this[0][0] * this[3][1] * this[1][2] +
          this[1][0] * this[0][1] * this[3][2] -
          this[0][0] * this[1][1] * this[3][2]) *
          s,
        (this[1][0] * this[2][1] * this[0][2] -
          this[2][0] * this[1][1] * this[0][2] +
          this[2][0] * this[0][1] * this[1][2] -
          this[0][0] * this[2][1] * this[1][2] -
          this[1][0] * this[0][1] * this[2][2] +
          this[0][0] * this[1][1] * this[2][2]) *
          s,
      ],
    ]);
  }
}
