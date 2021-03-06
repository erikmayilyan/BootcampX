const { Pool } = require('pg');
const cohortName = process.argv[2];
const limit = process.argv[3];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryStudent = `
  SELECT students.id, students.name, students.cohort_id
  FROM students JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name = '${cohortName}'
  LIMIT ${limit};
`;

pool.query(queryStudent)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));