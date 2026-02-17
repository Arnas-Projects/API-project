const init = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        const content = document.querySelector('#content');
        const usersList = document.createElement('ul');
        content.append(usersList);

        users.forEach((user) => {
            const { name, id } = user;

            const userElement = document.createElement('li');
            const userLink = document.createElement('a');
            userLink.textContent = id + '. ' + name;
            userLink.href = `/user.html?user-id=${id}`;
            userElement.append(userLink);
            usersList.append(userElement);
        });
    })
};

init();