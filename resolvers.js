export default {
    Query: {
        products: () => [
            { id: '643664633gdgsg', name: 'Unga', description: 'maize flour' },
            { id: '54545454fgr4rtrg', name: 'Taco', description: 'blazing meal' }
        ],
    },
    Mutation: {
        register: (parent, { username, password }, ctx, info) => {
            const user = { username, password }
            return user;
        }
    }
}