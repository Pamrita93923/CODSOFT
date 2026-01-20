// Get elements
const contactList = document.getElementById('contactList');
const saveBtn = document.getElementById('saveBtn');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const searchInput = document.getElementById('search');
const contactIdInput = document.getElementById('contactId');

// Initialize contacts array
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Display contacts
function displayContacts(filteredContacts = contacts) {
    contactList.innerHTML = '';
    filteredContacts.forEach((contact, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td>${contact.address}</td>
            <td>
                <button class="action-btn edit" onclick="editContact(${index})">Edit</button>
                <button class="action-btn delete" onclick="deleteContact(${index})">Delete</button>
            </td>
        `;
        // Add click highlight effect
        tr.addEventListener('click', () => {
            document.querySelectorAll('tr').forEach(row => row.classList.remove('active'));
            tr.classList.add('active');
        });
        contactList.appendChild(tr);
    });
}

// Save or update contact
saveBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const address = addressInput.value.trim();

    if (!name || !phone) {
        alert('Name and Phone are required!');
        return;
    }

    const contactData = { name, phone, email, address };

    if (contactIdInput.value) {
        // Update contact
        contacts[contactIdInput.value] = contactData;
        contactIdInput.value = '';
        saveBtn.textContent = 'Add Contact';
    } else {
        // Add new contact
        contacts.push(contactData);
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts();
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    addressInput.value = '';
});

// Edit contact
function editContact(index) {
    const contact = contacts[index];
    nameInput.value = contact.name;
    phoneInput.value = contact.phone;
    emailInput.value = contact.email;
    addressInput.value = contact.address;
    contactIdInput.value = index;
    saveBtn.textContent = 'Update Contact';
}

// Delete contact
function deleteContact(index) {
    if (confirm('Are you sure you want to delete this contact?')) {
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        displayContacts();
    }
}

// Search contacts
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(query) ||
        contact.phone.includes(query)
    );
    displayContacts(filtered);
});

// Initial display
displayContacts();
