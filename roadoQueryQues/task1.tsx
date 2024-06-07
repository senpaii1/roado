type Timestamp = string | null;

interface DeviceSession {
  logged_in: Timestamp;
  logged_out: Timestamp;
  lastSeenAt: Timestamp[];
}

interface User {
  id: string;
  sessions: DeviceSession[];
}

interface MonthlyStats {
  month: string;
  loggedInUsers: Set<string>;
  activeUsers: Set<string>;
}

function getMonthlyStats(users: User[], year: number, month: number): MonthlyStats {
  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0); // Last day of the month

  const loggedInUsers = new Set<string>();
  const activeUsers = new Set<string>();

  users.forEach(user => {
    user.sessions.forEach(session => {
      if (session.logged_in && new Date(session.logged_in) <= endOfMonth) {
        if (!session.logged_out || new Date(session.logged_out) >= startOfMonth) {
          loggedInUsers.add(user.id);
        }

        session.lastSeenAt.forEach(lastSeen => {
          const lastSeenDate = new Date(lastSeen);
          if (lastSeenDate >= startOfMonth && lastSeenDate <= endOfMonth) {
            activeUsers.add(user.id);
          }
        });
      }
    });
  });

  return {
    month: `${year}-${String(month + 1).padStart(2, '0')}`,
    loggedInUsers,
    activeUsers,
  };
}

// Example usage:
const users: User[] = [
  {
    id: "user1",
    sessions: [
      {
        logged_in: "2023-05-10T08:00:00Z",
        logged_out: null,
        lastSeenAt: ["2023-05-15T08:00:00Z", "2023-06-20T08:00:00Z"],
      },
    ],
  },
  // Add more users here...
];

const stats = getMonthlyStats(users, 2023, 5); // For May 2023
console.log(`Logged In Users: ${Array.from(stats.loggedInUsers)}`);
console.log(`Active Users: ${Array.from(stats.activeUsers)}`);
