const faker = require('faker')

const makeNewFakeUser = () => ({
    email: faker.internet.email(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    created_at: new Date()
})
exports.seed = function (knex) {
    return knex('users').del()
        .then(function () {
            let seedUsers = []
            let neededUsers = 5
            for (let i = 0; i < neededUsers; i++) {
                seedUsers.push(makeNewFakeUser())
            }
            return knex('users').insert(seedUsers);
        });
};
