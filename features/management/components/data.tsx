import { CLassType, Teacher } from "../types";

export const managementStats = [
  {
    label: "Total Teachers",
    value: "24",
    icon: "👨‍🏫",
    color: "bg-primary-100 text-primary-700",
  },
  {
    label: "Total Classes",
    value: "18",
    icon: "📚",
    color: "bg-secondary-100 text-secondary-700",
  },
  {
    label: "Total Students",
    value: "642",
    icon: "👥",
    color: "bg-purple-100 text-purple-700",
  },
  {
    label: "Pending Approvals",
    value: "5",
    icon: "⏳",
    color: "bg-accent-100 text-accent-700",
  },
];
export const pendingApprovals = [
  {
    teacher: "Mrs. Adebayo",
    class: "JSS 1A",
    students: 35,
    submitted: "2 hours ago",
  },
  {
    teacher: "Mr. Okonkwo",
    class: "JSS 2B",
    students: 38,
    submitted: "5 hours ago",
  },
  {
    teacher: "Miss Ibrahim",
    class: "SS 1 Science",
    students: 32,
    submitted: "1 day ago",
  },
  {
    teacher: "Mr. Chukwu",
    class: "JSS 3A",
    students: 40,
    submitted: "1 day ago",
  },
  {
    teacher: "Mrs. Bello",
    class: "SS 2 Arts",
    students: 28,
    submitted: "2 days ago",
  },
];
export const recentActivity = [
  {
    action: "Approved results for JSS 1B (Mrs. Okafor)",
    time: "3 hours ago",
    icon: "✅",
  },
  {
    action: "Added new teacher: Mr. John Adewale",
    time: "1 day ago",
    icon: "👨‍🏫",
  },
  { action: "Downloaded JSS 2A results (ZIP)", time: "2 days ago", icon: "📥" },
];
export const varClass: CLassType[] = [
  {
    id: "1",
    name: "JSS 1A",
    academicYear: "2024/2025",
    teacherId: "1",
    teacherName: "Mrs. Adebayo Folake",
    studentCount: 35,
    subjects: 10,
  },
  {
    id: "2",
    name: "JSS 1B",
    academicYear: "2024/2025",
    teacherId: "1",
    teacherName: "Mrs. Adebayo Folake",
    studentCount: 38,
    subjects: 10,
  },
  {
    id: "3",
    name: "JSS 2A",
    academicYear: "2024/2025",
    teacherId: "2",
    teacherName: "Mr. Okonkwo John",
    studentCount: 32,
    subjects: 10,
  },
  {
    id: "4",
    name: "JSS 2B",
    academicYear: "2024/2025",
    studentCount: 40,
    subjects: 10,
  },
  {
    id: "5",
    name: "SS 1 Science",
    academicYear: "2024/2025",
    teacherId: "3",
    teacherName: "Miss Ibrahim Aisha",
    studentCount: 28,
    subjects: 9,
  },
];

export const teachers: Teacher[] = [
  {
    id: "1",
    name: "Mrs. Adebayo Folake",
    email: "fadebayo@school.com",
    classes: ["JSS 1A", "JSS 1B"],
    status: "active",
    invitedAt: "2024-09-15",
  },
  {
    id: "2",
    name: "Mr. Okonkwo John",
    email: "jokonkwo@school.com",
    classes: ["JSS 2A"],
    status: "active",
    invitedAt: "2024-09-15",
  },
  {
    id: "3",
    name: "Miss Ibrahim Aisha",
    email: "aibrahim@school.com",
    classes: ["SS 1 Science"],
    status: "active",
    invitedAt: "2024-10-01",
  },
  {
    id: "4",
    name: "Mr. Chukwu Emmanuel",
    email: "echukwu@school.com",
    classes: [],
    status: "pending",
    invitedAt: "2024-11-20",
  },
];
