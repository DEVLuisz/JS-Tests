const users = [
    {id: 1, name: 'Kyra'},
    {id: 2, name: 'Ny'},
    {id: 3, name: 'Khyria'},
];

const orders = [
    {userId: 1, product: 'Notebook'},
    {userId: 2, product: 'Smartphone'},
    {userId: 3, product: 'Mackintosh'},
    {userId: 4, product: 'Computer'},
];

const res = users.map((user) => {
    const order = orders.find(order => order.userId === user.id);

    if (order) {
        return {
            ...user,
            ...order
        };
    }
});

console.log(res);

