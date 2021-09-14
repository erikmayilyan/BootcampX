SELECT cohort.name as cohort_name, count(students.id) as student_count FROM cohorts JOIN students ON cohorts.id = cohort_id ORDER BY ASC
