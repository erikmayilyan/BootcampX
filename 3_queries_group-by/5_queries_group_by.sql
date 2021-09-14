SELECT student.name AS student, AVG(assignments_submissions.duration) AS average_assignment_duration FROM students JOIN assignment_submissions ON students.id = student_id GROUP BY student.name ORDER BY AVG(assignments_submissions.duration) DESC
