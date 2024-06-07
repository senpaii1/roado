type Point = 'A' | 'B' | 'C' | 'D' | 'W' | string;

interface Trip {
  start: Point;
  end: Point;
}

interface Shipment {
  pickups: Point[];
  drops: Point[];
}

function areTripsValid(trips: Trip[], shipment: Shipment): boolean {
  const { pickups, drops } = shipment;
  const allPoints = new Set([...pickups, ...drops]);

  // Track connections
  const connections = new Map<Point, Point[]>();

  trips.forEach(({ start, end }) => {
    if (!connections.has(start)) {
      connections.set(start, []);
    }
    connections.get(start)!.push(end);
  });

  // Track visited pick-ups and drop points
  const visitedPickups = new Set<Point>();
  const visitedDrops = new Set<Point>();

  // Traverse trips from pickups to drops
  function traverse(point: Point): boolean {
    if (drops.includes(point)) {
      visitedDrops.add(point);
      return true;
    }

    if (!connections.has(point)) {
      return false;
    }

    for (const next of connections.get(point)!) {
      if (traverse(next)) {
        return true;
      }
    }

    return false;
  }

  // Check each pickup point
  for (const pickup of pickups) {
    if (!traverse(pickup)) {
      return false;
    }
    visitedPickups.add(pickup);
  }

  // Ensure all pickups and drops are visited
  return (
    pickups.length === visitedPickups.size &&
    drops.length === visitedDrops.size
  );
}

// Example usage
const shipment: Shipment = {
  pickups: ['A', 'B'],
  drops: ['C', 'D'],
};

const validTrips: Trip[] = [
  { start: 'A', end: 'W' },
  { start: 'B', end: 'W' },
  { start: 'W', end: 'C' },
  { start: 'W', end: 'D' },
];

const invalidTrips: Trip[] = [
  { start: 'A', end: 'W1' },
  { start: 'B', end: 'W2' },
  { start: 'W3', end: 'C' },
  { start: 'W4', end: 'D' },
];

console.log('Valid Trips:', areTripsValid(validTrips, shipment)); // true
console.log('Invalid Trips:', areTripsValid(invalidTrips, shipment)); // false
