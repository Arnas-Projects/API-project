export const getUser = async (id) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return user;
};

export const getUsers = async _ => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return users;
};

export const createUser = () => {};
export const updateUser = () => {};
export const deleteUser = () => {};
