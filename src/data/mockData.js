export const todaysTasks = [
  {
    id: 1,
    title: 'Solve 3 Hard Dynamic Programming Problems',
    cat: 'DSA',
    sub: 'Dynamic Programming',
    priority: 'High',
    time: '10:00 AM',
    done: true,
  },
  {
    id: 2,
    title: 'Review System Design Distributed Caching doc',
    cat: 'Interviews',
    sub: 'System Architecture',
    priority: 'High',
    time: '11:30 AM',
    done: true,
  },
  {
    id: 3,
    title: 'Submit Operating Systems Lab 4 Report',
    cat: 'College',
    sub: 'CS 302',
    priority: 'Med',
    time: '2:00 PM',
    done: true,
  },
  {
    id: 4,
    title: 'Implement Dijkstra and A* pathfinding visualization',
    cat: 'DSA',
    sub: 'Graph Theory',
    priority: 'High',
    time: '4:30 PM',
    done: false,
    note: 'Due in 2 hours',
  },
  {
    id: 5,
    title: 'Read 2 chapters of Designing Data-Intensive Applications',
    cat: 'Hobbies',
    sub: 'Reading',
    priority: 'Low',
    time: '7:00 PM',
    done: false,
  },
  {
    id: 6,
    title: 'Prepare behavioral questions for mock interview',
    cat: 'Interviews',
    sub: 'Behavioral',
    priority: 'Med',
    time: '8:30 PM',
    done: false,
  },
]

export const categories = [
  { name: 'DSA', done: 13, total: 20, tag: 'Top Priority', pending: 7 },
  { name: 'College', done: 8, total: 10, tag: 'On Track', pending: 2 },
  { name: 'Interviews', done: 4, total: 10, tag: 'Needs Attention', pending: 6 },
  { name: 'Hobbies', done: 5, total: 10, tag: 'Balanced', pending: 5 },
]

export const subcategories = {
  DSA: ['Binary Search & Trees', 'Dynamic Programming', 'Graph Theory'],
  College: ['CS 302', 'CS 401'],
  Interviews: ['System Architecture', 'Behavioral', 'Resume'],
  Hobbies: ['Reading'],
  'System Design': ['Caching', 'Load Balancing'],
}

export const deadlines = [
  {
    id: 1,
    title: 'Update resume project bullets',
    cat: 'Interviews',
    sub: 'Resume',
    date: 'Oct 23',
    overdue: '1d',
  },
  {
    id: 2,
    title: 'Graph Bipartition check algorithm',
    cat: 'DSA',
    sub: 'Graph Theory',
    priority: 'High',
    date: 'Tomorrow',
    time: '10:00 AM',
  },
  {
    id: 3,
    title: 'Compiler Design Project Milestone 2',
    cat: 'College',
    sub: 'CS 401',
    priority: 'High',
    date: 'Oct 26',
    time: '11:59 PM',
  },
  {
    id: 4,
    title: 'Mock Interview with Senior SRE',
    cat: 'Interviews',
    sub: 'System Design',
    priority: 'High',
    date: 'Oct 27',
    time: '4:00 PM',
  },
]

export const weekly = [
  { day: 'Mon', value: 6 },
  { day: 'Tue', value: 8 },
  { day: 'Wed', value: 9 },
  { day: 'Thu', value: 6 },
  { day: 'Fri', value: 2 },
  { day: 'Sat', value: 1 },
  { day: 'Sun', value: 1 },
]
