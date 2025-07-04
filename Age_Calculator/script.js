document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const dobInput = document.getElementById('dob').value;
  const resultDiv = document.getElementById('result');

  if (!dobInput) {
    resultDiv.textContent = 'Please select a valid date.';
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    resultDiv.textContent = 'Date of Birth cannot be in the future.';
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // days in prev month
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.textContent = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
});
