const pixel = (value: number): string => `${value}px`;

const half = (value: number): number => value / 2;

const viewBox = (value: number): string =>
  `0 0 ${value} ${value}`;

const radius = (size: number, stroke: number): number =>
  half(size) - half(stroke);

const dashArray = (size: number, stroke: number): number =>
  (2 * Math.PI * (radius(size, stroke)));

const dashoffset = (size: number, stroke: number, value: number): number =>
  ((100 - value) / 100) * (2 * Math.PI * (radius(size, stroke)));

export {
  pixel,
  half,
  viewBox,
  radius,
  dashArray,
  dashoffset
}