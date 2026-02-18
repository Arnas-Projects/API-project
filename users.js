const init = async _ => {
    const content = document.querySelector('#content');

    const users = await fetchUsers();

    const usersList = usersListsComponent(users);
    content.append(usersList);
};

const fetchUsers = async _ => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return users;
};

const usersListsComponent = (data) => {
    const usersListWrapper = document.createElement('div');
    usersListWrapper.classList.add('users-wrapper');

    const usersListTitle = document.createElement('h2');
    usersListTitle.textContent = data.length > 0 ? 'Users:' : 'No Users';
    usersListWrapper.append(usersListTitle);

    if (data.length > 0) {
        const usersList = document.createElement('ul');
        usersListWrapper.append(usersList);

        data.forEach((user) => {
            const { name, id } = user;
            const userElement = document.createElement('li');
            const userLink = document.createElement('a');
            userLink.textContent = id + '. ' + name;
            userLink.href = `/API-PROJECT/user.html?user-id=${id}`;
            userElement.append(userLink);
            usersList.append(userElement);
        });
    }

    return usersListWrapper;
}


init();