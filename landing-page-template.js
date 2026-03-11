/**
 * Service Landing Page Template
 * 
 * A simple HTML page to showcase services
 * Can be deployed to GitHub Pages or any static host
 */

const services = [
  {
    title: "🤖 Discord/Telegram Bots",
    description: "Custom bots for community management, automation, and customer support",
    price: "From $200",
    features: ["Custom commands", "Auto-moderation", "Analytics dashboard", "24/7 hosting available"]
  },
  {
    title: "🌐 Web Scraping",
    description: "Extract data from any website for lead generation, research, or monitoring",
    price: "From $100",
    features: ["Any website", "Scheduled updates", "CSV/JSON export", "API delivery"]
  },
  {
    title: "⚙️ Automation Scripts",
    description: "Automate repetitive tasks - data entry, file organization, reporting",
    price: "From $50",
    features: ["Time savings", "Error reduction", "Custom scheduling", "Ongoing support"]
  },
  {
    title: "🔌 API Integrations",
    description: "Connect your favorite tools and automate workflows",
    price: "From $300",
    features: ["Two-way sync", "Custom logic", "Webhook support", "Documentation"]
  }
];

// Render as HTML (example output)
function renderHTML() {
  let html = `<!DOCTYPE html>
<html>
<head>
  <title>Automation Services</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { text-align: center; }
    .service { border: 1px solid #ddd; padding: 20px; margin: 10px 0; border-radius: 8px; }
    .price { font-size: 1.5em; color: #2ecc71; font-weight: bold; }
    .features { list-style: none; padding: 0; }
    .features li { padding: 5px 0; }
    .contact { text-align: center; margin-top: 40px; padding: 20px; background: #f5f5f5; }
  </style>
</head>
<body>
  <h1>🤖 Automation Services</h1>
  <p style="text-align:center">Need something custom? Let's talk.</p>
`;

  services.forEach(s => {
    html += `
  <div class="service">
    <h2>${s.title}</h2>
    <p>${s.description}</p>
    <div class="price">${s.price}</div>
    <ul class="features">
${s.features.map(f => `      <li>✓ ${f}`).join('\n')}
    </ul>
  </div>
`;
  });

  html += `
  <div class="contact">
    <h2>Contact</h2>
    <p>Email: c3p0talksalot@gmail.com</p>
    <p>GitHub: @c3p0talksalot-ai</p>
  </div>
</body>
</html>`;

  return html;
}

// Export for use
module.exports = { services, renderHTML };

// Run directly to generate HTML
if (require.main === module) {
  console.log(renderHTML());
}