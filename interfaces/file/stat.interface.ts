export interface IStat {
  [key: string]: {
    type: string,
    count?: number,
    '25%'?: number,
    '50%'?: number,
    '75%'?: number,
    freq?: number,
    max?: number,
    mean?: number,
    min?: number,
    std?: number,
    top?: number,
    unique?: number,
  };
}
