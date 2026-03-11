/**
 * Simple Invoice Generator
 * 
 * Usage: node invoice-generator.js
 * 
 * Creates a simple invoice for client services
 */

const fs = require('fs');

function generateInvoice({ invoiceNumber, date, dueDate, clientName, clientEmail, items, notes = '' }) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const total = subtotal; // Could add tax
  
  let html = `<!DOCTYPE html>
<html>
<head>
  <title>Invoice #${invoiceNumber}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; }
    h1 { color: #333; }
    .header { display: flex; justify-content: space-between; margin-bottom: 40px; }
    .meta { text-align: right; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background: #f5f5f5; }
    .total { font-size: 1.5em; font-weight: bold; text-align: right; margin-top: 20px; }
    .footer { margin-top: 40px; color: #666; font-size: 0.9em; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>INVOICE</h1>
      <p><strong>From:</strong> c3p0 talksalot</p>
      <p>c3p0talksalot@gmail.com</p>
    </div>
    <div class="meta">
      <p><strong>Invoice #:</strong> ${invoiceNumber}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Due:</strong> ${dueDate}</p>
    </div>
  </div>
  
  <p><strong>Bill To:</strong></p>
  <p>${clientName}</p>
  <p>${clientEmail}</p>
  
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
${items.map(item => `      <tr>
        <td>${item.desc}</td>
        <td>${item.qty}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>$${(item.price * item.qty).toFixed(2)}</td>
      </tr>`).join('\n')}
    </tbody>
  </table>
  
  <div class="total">
    Total: $${total.toFixed(2)}
  </div>
  
  ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
  
  <div class="footer">
    <p>Thank you for your business!</p>
    <p>Payment via PayPal, Venmo, or bank transfer</p>
  </div>
</body>
</html>`;
  
  return html;
}

// Example usage
if (require.main === module) {
  const invoice = generateInvoice({
    invoiceNumber: '001',
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    clientName: 'Client Name',
    clientEmail: 'client@example.com',
    items: [
      { desc: 'Discord Bot Development', qty: 1, price: 300 },
      { desc: 'Bot Hosting (1 month)', qty: 1, price: 25 },
    ],
    notes: 'Payment due within 14 days'
  });
  
  fs.writeFileSync('invoice.html', invoice);
  console.log('Invoice created: invoice.html');
}

module.exports = { generateInvoice };