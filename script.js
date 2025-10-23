// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
const navItems = navLinks.querySelectorAll("a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active nav link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

// Fixtures Data
const fixtures = [
  {
    id: 1,
    opponent: "City United",
    date: "2024-11-15",
    time: "19:00",
    status: "upcoming",
    result: "",
  },
  {
    id: 2,
    opponent: "River FC",
    date: "2024-11-10",
    time: "18:30",
    status: "completed",
    result: "2-1 Win",
  },
  {
    id: 3,
    opponent: "Mountain Stars",
    date: "2024-11-20",
    time: "20:00",
    status: "upcoming",
    result: "",
  },
  {
    id: 4,
    opponent: "Valley Rovers",
    date: "2024-11-05",
    time: "17:00",
    status: "completed",
    result: "1-1 Draw",
  },
  {
    id: 5,
    opponent: "Coast Athletic",
    date: "2024-11-25",
    time: "19:30",
    status: "upcoming",
    result: "",
  },
  {
    id: 6,
    opponent: "Desert Kings",
    date: "2024-10-28",
    time: "18:00",
    status: "completed",
    result: "3-0 Win",
  },
];

// Populate Fixtures
function displayFixtures(filter = "all") {
  const fixturesGrid = document.getElementById("fixturesGrid");
  fixturesGrid.innerHTML = "";

  const filtered =
    filter === "all" ? fixtures : fixtures.filter((f) => f.status === filter);

  filtered.forEach((fixture) => {
    const card = document.createElement("div");
    card.className = "fixture-card";
    card.innerHTML = `
                    <h3>${fixture.opponent}</h3>
                    <p><strong>Date:</strong> ${fixture.date}</p>
                    <p><strong>Time:</strong> ${fixture.time}</p>
                    <p><strong>Status:</strong> ${
                      fixture.status === "upcoming" ? "Upcoming" : "Completed"
                    }</p>
                    ${
                      fixture.result
                        ? `<p><strong>Result:</strong> ${fixture.result}</p>`
                        : ""
                    }
                    <span class="status">${
                      fixture.status === "upcoming" ? "Upcoming" : "Completed"
                    }</span>
                `;
    fixturesGrid.appendChild(card);
  });
}

// Filter Buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    displayFixtures(btn.dataset.filter);
  });
});

// Initialize fixtures on page load
displayFixtures();

// Form Submission
document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for registering! We will contact you soon.");
  document.getElementById("registrationForm").reset();
});
