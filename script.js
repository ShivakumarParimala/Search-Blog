// Sample data
const blogPosts = [
    { title: "Introduction to JavaScript", category: "tech", summary: "Learn the basics of JavaScript." },
    { title: "Healthy Living Tips", category: "health", summary: "Simple tips for a healthier lifestyle." },
    { title: "Latest Tech Trends 2024", category: "tech", summary: "Explore upcoming technology trends." },
    { title: "Yoga for Beginners", category: "health", summary: "Start your yoga journey here." },
    { title: "Minimalist Lifestyle Guide", category: "lifestyle", summary: "Embrace minimalism to improve your life." }
];

// Render initial results
function renderResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
    }

    results.forEach(post => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        resultItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
        `;
        resultsContainer.appendChild(resultItem);
    });
}

// Filter results based on input and category
function filterResults() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;

    const filteredResults = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchInput) || post.summary.toLowerCase().includes(searchInput);
        const matchesCategory = categoryFilter === "all" || post.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    renderResults(filteredResults);
}

// Initial render
renderResults(blogPosts);
