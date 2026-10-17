//Об'єкт
const formState = {
  email: '',
  message: '',
};
// END

// Змінні
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY);
// END

// Подія Input
form.addEventListener('input', e => {
  const { name, value } = e.target;
  if (name in formState) {
    formState[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
  }
});
// END

// Оновлення форми та збереження даних у localStorage
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formState.email = parsedData.email;
  formState.message = parsedData.message;
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}
// END

// Подія Submit
form.addEventListener('submit', e => {
  e.preventDefault();
  if (formState.email.trim() === '' || formState.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formState);
  localStorage.removeItem(STORAGE_KEY);

  formState.email = '';
  formState.message = '';

  form.reset();
});
// END
