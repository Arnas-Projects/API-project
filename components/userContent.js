const userContent = (param) => {

    const {
        id,
        name,
        username,
        email,
        phone,
        website,
        address: { street, suite, city, zipcode },
        company: { name: companyName, catchPhrase, bs }
    } = param;

    if (!name || !id) {
        return '';
    }

    const userWrapper = document.createElement('div');
    userWrapper.classList.add('user-wrapper');

    const userTitle = document.createElement('h1');
    userTitle.textContent = id + '. ' + 'User name: ' + name;
    userWrapper.append(userTitle);

    if (username) {
        const userNickname = document.createElement('p');
        userNickname.textContent = 'User nickname:';
        userNickname.classList.add('fetch-data');

        const value = document.createElement('span');
        value.textContent = username;
        userNickname.append(value);

        userWrapper.append(userNickname);
    }

    if (email) {
        const userEmail = document.createElement('p');
        userEmail.textContent = 'Email:';
        userEmail.classList.add('fetch-data');

        const value = document.createElement('span');
        value.textContent = email;
        userEmail.append(value);

        userWrapper.append(userEmail);
    }

    if (phone) {
        const userPhone = document.createElement('p');
        userPhone.textContent = 'Phone number:';
        userPhone.classList.add('fetch-data');

        const value = document.createElement('span');
        value.textContent = phone;
        userPhone.append(value);

        userWrapper.append(userPhone);
    }

    if (street && suite && city && zipcode) {
        const userAddress = document.createElement('p');
        userAddress.textContent = 'Address:';
        userAddress.classList.add('fetch-data');

        const value = document.createElement('span');
        value.textContent = `${street} ${suite} ${city} ${zipcode}`;
        userAddress.append(value);

        userWrapper.append(userAddress);
    }

    if (website) {
        const userWebsite = document.createElement('p');
        userWebsite.textContent = 'Website:';
        userWebsite.classList.add('fetch-data');

        const value = document.createElement('span');
        value.textContent = website;
        userWebsite.append(value);

        userWrapper.append(userWebsite);
    }

    if (companyName && catchPhrase && bs) {
        const userCompany = document.createElement('div');
        userCompany.classList.add('fetch-data');

        const label = document.createElement('p');
        label.textContent = 'Company:';
        userCompany.append(label);

        const companyInfo = document.createElement('div');
        companyInfo.classList.add('company-info');

        const valueCompanyName = document.createElement('span');
        valueCompanyName.textContent = `Name: ${companyName}`;

        const valueCompanyPhrase = document.createElement('span');
        valueCompanyPhrase.textContent = `Catch Phrase: ${catchPhrase}`;

        const valueCompanyBs = document.createElement('span');
        valueCompanyBs.textContent = `Bs: ${bs}`;

        companyInfo.append(valueCompanyName, valueCompanyPhrase, valueCompanyBs);
        userCompany.append(companyInfo);

        userWrapper.append(userCompany);
    }

    return userWrapper;
};

export default userContent;