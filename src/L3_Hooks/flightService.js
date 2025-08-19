const ALL_FLIGHTS = [
  // id, code, airline, from, to, departAt (ISO), duration (min), price (SEK)
  {
    id: "F1001",
    code: "SK101",
    airline: "SAS",
    from: "ARN",
    to: "LHR",
    departAt: "2025-08-15T08:30:00Z",
    duration: 140,
    price: 1990,
  },
  {
    id: "F1002",
    code: "SK104",
    airline: "SAS",
    from: "ARN",
    to: "CDG",
    departAt: "2025-08-15T09:45:00Z",
    duration: 150,
    price: 2150,
  },
  {
    id: "F1003",
    code: "BA215",
    airline: "British Airways",
    from: "LHR",
    to: "JFK",
    departAt: "2025-08-16T11:10:00Z",
    duration: 410,
    price: 6490,
  },
  {
    id: "F1004",
    code: "DY330",
    airline: "Norwegian",
    from: "OSL",
    to: "ARN",
    departAt: "2025-08-15T13:00:00Z",
    duration: 60,
    price: 890,
  },
  {
    id: "F1005",
    code: "LH812",
    airline: "Lufthansa",
    from: "ARN",
    to: "FRA",
    departAt: "2025-08-17T06:15:00Z",
    duration: 130,
    price: 1790,
  },
  {
    id: "F1006",
    code: "AF146",
    airline: "Air France",
    from: "CDG",
    to: "LHR",
    departAt: "2025-08-17T15:25:00Z",
    duration: 70,
    price: 1190,
  },
  {
    id: "F1007",
    code: "SK220",
    airline: "SAS",
    from: "ARN",
    to: "LHR",
    departAt: "2025-08-18T18:40:00Z",
    duration: 145,
    price: 2390,
  },
];

export function searchFlights(params = {}) {
  // from, to, date
  const from = (params.from || "").trim().toUpperCase();
  const to = (params.to || "").trim().toUpperCase();
  const date = (params.date || "").trim(); // 2025-08-19
  console.log("Search criteria:", { from, to, date });

  const filtered = ALL_FLIGHTS.filter((flight) => {
    if (from) {
      if (flight.from !== from) {
        return false;
      }
    }

    if (to) {
      if (flight.to !== to) {
        return false;
      }
    }

    if (date) {
      const flightDate = flight.departAt.slice(0, 10); // 2025-08-18T18:40:00Z => 2025-08-18
      if (flightDate !== date) {
        return false;
      }
    }
    return true;
  });

  // Default sort to match "price (low -> high)"
  filtered.sort((a, b) => a.price - b.price);

  return filtered;
}

export function bookFlight() {}
