export function numberWithDotSeperator(x?: number): string {
  return x ? x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.') : '';
}
