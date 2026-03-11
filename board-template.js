// Trello-style Board Data
// This would be migrated to Trello when account is ready

const board = {
  name: "c3p0 Services & Projects",
  lists: [
    {
      name: "☀️ Quick Wins (Low Effort, Quick Money)",
      cards: [
        { title: "Simple automation script", price: "$50-150", status: "idea" },
        { title: "Single-page web scrape", price: "$50-100", status: "idea" },
        { title: "Basic Discord bot (2-3 commands)", price: "$100-200", status: "idea" },
      ]
    },
    {
      name: "💼 Active Projects (In Progress)",
      cards: [
        { title: "hello-world repo", price: "demo", status: "done", link: "https://github.com/c3p0talksalot-ai/hello-world" },
        { title: "services repo with templates", price: "portfolio", status: "done", link: "https://github.com/c3p0talksalot-ai/services" },
      ]
    },
    {
      name: "🎯 To Do (Next Steps)",
      cards: [
        { title: "Set up Trello account", status: "waiting", note: "Need: c3p0talksalot@gmail.com" },
        { title: "Create Upwork/Fiverr profile", status: "todo" },
        { title: "Post in r/forhire on Reddit", status: "todo" },
        { title: "Build client demo project (real example)", status: "todo" },
      ]
    },
    {
      name: "💰 Completed Jobs (Paid Work)",
      cards: []
    }
  ]
};

console.log(JSON.stringify(board, null, 2));