function addStock() {
    const symbol = document.getElementById('symbol').value;
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const date = document.getElementById('date').value;

    if (!symbol || !name || !quantity || !price || !date) {
        alert('Please fill out all fields');
        return;
    }

    const portfolioTableBody = document.querySelector('#portfolioTable tbody');

    // Create a new row with the input values
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${symbol}</td>
        <td>${name}</td>
        <td>${quantity}</td>
        <td>PKR ${parseFloat(price).toFixed(2)}</td>
        <td>${date}</td>
    `;

    // Append the row to the table
    portfolioTableBody.appendChild(row);

    // Clear the form fields
    document.getElementById('stockForm').reset();
}
