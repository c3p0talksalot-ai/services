/**
 * API Integration Template
 * 
 * Example: Fetch data from one API and post to another
 * Useful for syncing data between services
 */

const https = require('https');

// Simple HTTP request wrapper
function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.end();
  });
}

// Example: Sync data between two APIs
async function syncData(sourceApiUrl, destApiUrl, apiKey) {
  console.log('Fetching from source...');
  const sourceData = await request(sourceApiUrl);
  
  console.log(`Got ${sourceData.length} items, sending to destination...`);
  
  // Post to destination
  const result = await request(destApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(sourceData)
  });
  
  console.log('Sync complete!', result);
}

module.exports = { request, syncData };