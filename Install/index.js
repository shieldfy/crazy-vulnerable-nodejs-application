console.log("CVNA| Seeding Databases");

console.log("CVNA| 1. Seeding MongoDB");
require('./mongo_seed').run();

console.log("CVNA| 2. Seeding MySQL");
require('./mysql_seed').run();
console.log("CVNA| Installation Done, You can start testing now");