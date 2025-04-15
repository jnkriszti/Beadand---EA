const API_URL = 'https://retoolapi.dev/hDTV5a/data'; // Teszt API

function validateInput(str) {
  return str && str.length > 0 && str.length <= 30;
}

function showMessage(msg, color = 'green') {
  const el = document.getElementById('message');
  el.textContent = msg;
  el.style.color = color;
}

// READ
function loadData() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('dataList');
      list.innerHTML = data.map(d => `
        <div>ID: ${d.id}, Név: ${d.name}, Magasság: ${d.height}, Kor: ${d.age}</div>
      `).join('');

      const heights = data.map(d => Number(d.height)).filter(n => !isNaN(n));
      if (heights.length > 0) {
        const sum = heights.reduce((a, b) => a + b, 0);
        const avg = (sum / heights.length).toFixed(2);
        const max = Math.max(...heights);
        document.getElementById('stats').innerHTML = `
          <p>Magasságok összege: ${sum}</p>
          <p>Átlag: ${avg}</p>
          <p>Legnagyobb: ${max}</p>
        `;
      }
    });
}

// CREATE
function createData() {
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const age = document.getElementById('age').value;

  if (![name, height, age].every(validateInput)) {
    showMessage('Hibás adatbevitel (max 30 karakter, nem üres)', 'red');
    return;
  }

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, height, age })
  })
  .then(res => res.json())
  .then(() => {
    showMessage('Sikeres hozzáadás!');
    loadData();
  });
}

// GET FOR UPDATE
function getDataForId() {
  const id = document.getElementById('updateId').value;
  fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('updateName').value = data.name || '';
      document.getElementById('updateHeight').value = data.height || '';
      document.getElementById('updateAge').value = data.age || '';
    });
}

// UPDATE
function updateData() {
  const id = document.getElementById('updateId').value;
  const name = document.getElementById('updateName').value;
  const height = document.getElementById('updateHeight').value;
  const age = document.getElementById('updateAge').value;

  if (![name, height, age].every(validateInput)) {
    showMessage('Hibás adatbevitel (max 30 karakter, nem üres)', 'red');
    return;
  }

  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, height, age })
  })
  .then(res => res.json())
  .then(() => {
    showMessage('Sikeres módosítás!');
    loadData();
  });
}

// DELETE
function deleteData() {
  const id = document.getElementById('deleteId').value;
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  .then(() => {
    showMessage('Sikeres törlés!');
    loadData();
  });
}
