/**
 * Scheduled Task Template
 * 
 * Example: Run a task on a schedule (like cron)
 * Usage: node scheduled-task.js
 */

const schedule = require('node-schedule');

// Example task - replace with your logic
function dailyReport() {
  const now = new Date();
  console.log(`[${now.toISOString()}] Running daily report task...`);
  
  // Your automation logic here:
  // - Fetch data
  // - Generate report
  // - Send email
  // - etc.
}

// Schedule options:
// Run at specific time: schedule.scheduleJob('0 9 * * *', dailyReport);  // 9 AM daily
// Run every minute: const job = schedule.scheduleJob('*/1 * * * *', dailyReport);
// Run once after delay: setTimeout(dailyReport, 5000);

// Run every 5 minutes for demo
const job = schedule.scheduleJob('*/5 * * * *', () => {
  dailyReport();
});

console.log('Scheduler started. Press Ctrl+C to stop.');

// Handle graceful shutdown
process.on('SIGINT', () => {
  job.cancel();
  console.log('Scheduler stopped.');
  process.exit(0);
});