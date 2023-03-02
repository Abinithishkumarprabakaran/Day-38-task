// using mongoDB

// 1. Find all the topics and tasks which are thought in the month of October
db.topics.find({dateOfTopic: {$elemMatch: {month: "Oct"}}}, {_id: 0, topic: 1})
db.tasks.find({dateOfTask: {$elemMatch: {month: "Oct"}}}, {_id:0, task:1})


// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companyDrives.find({date: { $gte: 15, $lte: 30}}, {_id: 0, companyName: 1})


// 3. Find all the company drives and students who are appeared for the placement.
db.users.find({Details: {$elemMatch: {placement: "appeared"}}}, {_id: 0, userName: 1})

// 4. Find the number of problems solved by the user in codekata
db.users.find({Details: {$elemMatch: {problemSolved: {$gt:0}}}}, {userName: 1, problemSolved: 1})

// 5. Find all the mentors with who has the mentee's count more than 15
db.mentors.find({mentees: {$gte: 15}})

// 6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.users.find({$and:[{attendance:"a"},{taskSubmitted:"no"}]})
