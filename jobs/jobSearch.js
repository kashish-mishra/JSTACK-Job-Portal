
const categories = Array.from(jCategory);

// Search functionality
document.getElementById("searchBar").addEventListener("keyup", (e) => {

    const searchData = e.target.value.toLowerCase();

    const filterData = categories.filter((item) =>
        item.title.toLowerCase().includes(searchData)
    );

    displayItems(filterData);
});


// Display job cards
const displayItems = (items) => {

    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

    items.forEach((item) => {

        const { image, title, rate, av, index } = item;

        const jList = document.createElement("div");
        jList.className = "jList";

        jList.innerHTML = `
            <img src="${image}" alt="">
            <h3>${title}</h3>
            <p>${rate}</p>
            <span id="key">${av}</span>
        `;

        rootElement.appendChild(jList);

        // Open job details page
        jList.addEventListener("click", () => {
            window.location.href = `job-details.html?id=${index}`;
        });

    });
};


// Display all jobs initially
displayItems(categories);
