//Об'єкт
const formData = {
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
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});
// END

// Оновлення форми та збереження даних у localStorage
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}
// END

// Подія Submit
form.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';

  form.reset();
});
// END
