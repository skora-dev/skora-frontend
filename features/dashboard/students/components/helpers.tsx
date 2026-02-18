/* Helper to auto-generate realistic subject scores */
export function generateSubjects() {
  const subjects = [
    "Mathematics",
    "English",
    "Biology",
    "Chemistry",
    "Physics",
    "Economics",
    "Government",
    "Geography",
    "Literature",
    "Computer",
  ];

  return subjects.map((subject) => {
    const caScore = Math.floor(Math.random() * 41); // 0–40
    const examScore = Math.floor(Math.random() * 61); // 0–60
    const overall = caScore + examScore;

    return {
      subject,
      caScore,
      examScore,
      overall,
      passMark: 50,
      status: overall >= 50 ? "Pass" : "Fail",
    };
  });
}
