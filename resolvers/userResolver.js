// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        getAllUsers: (root, args, { db }, info) => db.users.findMany(),
        getUser: (root, args, { db }, info) => db.findByPk(args.id),
    },

    Mutation: {
        createUser: (root, { firstname, lastname }, { db }, info) =>
            db.create({
                firstname: firstname,
                lastname: lastname,
            }),
        updateUser: (root, args, { db }, info) =>
            db.update({
                    firstname: args.firstname,
                    lastname: args.lastname
                },
                {
                    where: {
                        id: args.id
                    }
            }),
        deleteUser: (root, args, { db }, info) =>
            db.destroy({
                where: {
                    id: args.id
                }
            })
    }
};



module.exports = resolvers;