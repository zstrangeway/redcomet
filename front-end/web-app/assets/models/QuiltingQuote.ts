import QuiltingPattern from '~/assets/models/QuiltingPattern'

export default class QuiltingQuote {
  private _minDimen: number = 12
  private _maxDimen: number = 144

  height?: number;
  width?: number;
  pattern?: QuiltingPattern;
  threadColor?: string;
  trim: boolean = false
  customerBatting: boolean = false
  battingYards?: number
  frontBinding: boolean = false
  backBinding: boolean = false

  constructor() {}

  get minDimen(): number {
    return this._minDimen
  }

  get maxDimen(): number {
    return this._maxDimen
  }

  get totalArea(): number {
    if (this.height === null || this.height === undefined || this.width === null || this.width === undefined) {
      return 0
    }
    return this.height * this.width
  }

  // Validation computed properties
  get dimensValid(): boolean {
    if (this.height === null || this.height === undefined || this.width === null || this.width === undefined) {
      return false
    }
    return this.height >= this.minDimen && this.width >= this.minDimen
  }

  get hasPattern(): boolean {
    return this.pattern !== null && this.pattern !== undefined
  }
}
