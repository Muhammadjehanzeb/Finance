function calculateCompoundedProfit() {
    const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
    const profitPercentage = parseFloat(document.getElementById('profitPercentage').value);
    const taxPercentage = parseFloat(document.getElementById('taxPercentage').value);

    if (isNaN(initialDeposit) || isNaN(profitPercentage) || isNaN(taxPercentage)) {
        alert('Please enter valid numbers');
        return;
    }

    const resultTableBody = document.querySelector('#resultTable tbody');
    resultTableBody.innerHTML = ''; // Clear previous results

    let currentAmount = initialDeposit;

    // Loop through 20 years to calculate compounded profit
    for (let year = 1; year <= 20; year++) {
        const baseAmount = currentAmount; // Store base amount before adding profit
        const totalProfit = (currentAmount * profitPercentage) / 100;
        const taxAmount = (totalProfit * taxPercentage) / 100;
        const yearlyProfit = totalProfit - taxAmount;
        currentAmount += yearlyProfit; // Add yearly net profit to the current amount for compounding

        // Insert result into the table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${year}</td>
            <td>PKR ${baseAmount.toFixed(2)}</td>
            <td>PKR ${yearlyProfit.toFixed(2)}</td>
            <td>PKR ${currentAmount.toFixed(2)}</td>
        `;
        resultTableBody.appendChild(row);
    }
}

function resetCalculator() {
    document.getElementById('profitForm').reset();
    document.querySelector('#resultTable tbody').innerHTML = '';
}

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
