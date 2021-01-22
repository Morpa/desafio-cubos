export default function formatDateBR(date: string) {
  return date.split('-').reverse().join('/')
}
