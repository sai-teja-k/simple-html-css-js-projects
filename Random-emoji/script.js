const content = document.querySelector(".emoji");

emoji = [ 
"😇️",
"😃️",
"😁️",
"😍️",
"😋️",
"🤥️",
"😉️",
"🤗️",
"😮‍💨️",
"😗️",
"😏️",
"😌️",
"😪️",
"🤠️",
"🥳️",
"👀️",
"❤️",
"🐈️",
"🐻️",
"🐼️" ];

content.addEventListener('mouseover', () => {
    content.textContent = emoji[Math.floor(Math.random()*emoji.length)];
})