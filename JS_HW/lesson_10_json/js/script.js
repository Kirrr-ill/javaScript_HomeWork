import { dataInfo } from "../data/data.js";
const content = document.querySelector('.cards');
const userCards = JSON.parse(dataInfo);

userCards.forEach(({ avatar, name, username, id, email, phone, website }) => {
	const div = document.createElement('div');
	div.classList.add('user-card');

	const ava = document.createElement('div');
	ava.classList.add('avatar');

	const userImg = document.createElement('img');
	userImg.classList.add('user-img');
	userImg.src = avatar;

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const userId = document.createElement('h6');
	userId.classList.add('userId');
	userId.textContent = `ID ${id}`

	const userName = document.createElement('h2')
	userName.classList.add('user-name');
	userName.textContent = name;

	const nicName = document.createElement('h4')
	nicName.classList.add('user-nic-name');
	nicName.textContent = username;

	const userEmail = document.createElement('p')
	userEmail.classList.add('user-email');
	userEmail.textContent = `E-mail: `;

	const userEmailLink = document.createElement('a');
	userEmailLink.classList.add('user-email-link')
	userEmailLink.textContent = email;
	userEmailLink.setAttribute('href', `mailto:${email}`);


	const userPhone = document.createElement('p')
	userPhone.classList.add('user-phone');
	userPhone.textContent = `Phone: `;

	const userPhoneLink = document.createElement('a');
	userPhoneLink.classList.add('user-phone-link')
	userPhoneLink.textContent = phone
	userPhoneLink.setAttribute('tel', `tel:${phone}`);

	const userWeb = document.createElement('p')
	userWeb.classList.add('user-website');
	userWeb.textContent = 'Web: ';

	const userWebLink = document.createElement('a');
	userWebLink.classList.add('user-web-link')
	userWebLink.textContent = website
	userWebLink.setAttribute('href', `http://${website}`);
	userWebLink.setAttribute('target', '_blank');

	cardInfo.appendChild(userId);
	cardInfo.appendChild(nicName);
	cardInfo.appendChild(userName);
	cardInfo.appendChild(userEmail);
	cardInfo.appendChild(userPhone);
	cardInfo.appendChild(userWeb);

	userEmail.append(userEmailLink);
	userPhone.append(userPhoneLink);
	userWeb.append(userWebLink);

	div.append(ava);
	ava.append(userImg);
	div.append(cardInfo);

	content.appendChild(div);
});