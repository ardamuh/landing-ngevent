export function formatDate(date) {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const [{ value: da }, , { value: mo }, , { value: ye }] =
    dtf.formatToParts(d);

  return `${da} ${mo} ${ye}`;
}
