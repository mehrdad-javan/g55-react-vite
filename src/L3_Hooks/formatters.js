export function fmtDur(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`; // 2h 10m
}

export function fmtTime(iso) {
  // 2025-08-15T08:30:00Z
  const d = new Date(iso);
  return d.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function fmtCurrency(n){
  return  Number(n).toLocaleString(undefined , {style: "currency", currency: "SEK"});
}