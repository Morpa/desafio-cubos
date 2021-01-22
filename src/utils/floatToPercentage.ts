export default function floatToPercentage(number: number): number {
  return Number(number.toPrecision(2)) * 10
}
