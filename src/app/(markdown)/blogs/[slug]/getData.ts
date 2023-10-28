export default function getData() {
  const res = fetch('/api/content').then((response) => response);

  return res;
}
