
import { getUsers } from './api/users.js';
import usersList from './components/usersList.js';
import navigationElement from "./navigationElement.js";

const init = async _ => {
    const content = document.querySelector('#content');

    const navigation = navigationElement();
    content.append(navigation);

    const users = await getUsers();

    const usersListElement = usersList(users);
    content.append(usersListElement);
};

init();