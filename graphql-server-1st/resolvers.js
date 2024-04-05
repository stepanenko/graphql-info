const resolvers = {
    Query: {
        users: () => users,
    },
};

const users = [
    { id: "a1", name: "John", surname: "Doe", age: 45 },
    { id: "a2", name: "Bill", surname: "Anderson", age: 51 },
];

module.exports = resolvers;
