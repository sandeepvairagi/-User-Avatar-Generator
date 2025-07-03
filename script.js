const openModalBtn = document.getElementById('openModalBtn');
const userModal = document.getElementById('userModal');
const cancelBtn = document.getElementById('cancelBtn');
const addUserBtn = document.getElementById('addUserBtn');
const userNameInput = document.getElementById('userName');
const avatarList = document.getElementById('avatarList');

// 🔹 Random color generator
function getRandomColor() {
  const colors = [
    "#e91e63", "#3f51b5", "#009688", "#ff5722",
    "#4caf50", "#9c27b0", "#2196f3", "#f44336",
    "#ff9800", "#00bcd4", "#8bc34a", "#673ab7"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

openModalBtn.addEventListener('click', () => {
  userModal.style.display = 'flex';
  userNameInput.focus();
});

cancelBtn.addEventListener('click', () => {
  userModal.style.display = 'none';
  userNameInput.value = '';
});

addUserBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim();
  if (name) {
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.innerText = name[0].toUpperCase();
    avatar.title = name;

    // ✅ Add random background color
    avatar.style.backgroundColor = getRandomColor();

    avatarList.appendChild(avatar);
  }
  userModal.style.display = 'none';
  userNameInput.value = '';
});