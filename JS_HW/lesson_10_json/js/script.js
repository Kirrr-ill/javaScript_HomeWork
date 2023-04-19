import { dataInfo } from "../data/data.js";
const content = document.querySelector('.cards');

const data = JSON.parse(dataInfo);
console.log(data);

data.forEach(({ avatar, name, username, id, email, phone, website }) => {
	const div = document.createElement('div');
	div.classList.add('user-card');

	const ava = document.createElement('img');
	ava.classList.add('avatar');
	ava.src = avatar;

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
	userEmail.textContent = `E-mail: ${email}`;

	const userPhone = document.createElement('p')
	userPhone.classList.add('user-phone');
	userPhone.textContent = `Phone: ${phone}`;

	const userWeb = document.createElement('p')
	userWeb.classList.add('user-email');
	userWeb.textContent = `Web: ${website}`;

	cardInfo.appendChild(userId);
	cardInfo.appendChild(nicName);
	cardInfo.appendChild(userName);
	cardInfo.appendChild(userEmail);
	cardInfo.appendChild(userPhone);
	cardInfo.appendChild(userWeb);

	div.append(ava);
	div.append(cardInfo);


	content.appendChild(div);
});