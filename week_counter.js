
const startDate = new Date(2023, 8, 19); 
const currentDate = new Date();
const diffTime = Math.abs(currentDate - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

const diffWeeks = Math.floor(diffDays / 7);

document.addEventListener('DOMContentLoaded', () => {
  const learningWeeksElement = document.getElementById('learning-weeks');
  if (learningWeeksElement) {
    learningWeeksElement.textContent = `${diffWeeks}`;
  }
});
