// ==========================================
// DevTrack - Application JavaScript
// Version: 0.2.0
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initializeNavigation();
    initializeModal();
    initializeTaskBoard();
    initializeNotifications();
    initializeConsole();
});

// ==========================================
// Navigation
// ==========================================

function initializeNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".page-section");

    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            const target = item.dataset.section;

            // Remove active state from all navigation items
            navItems.forEach((nav) => {
                nav.classList.remove("active");
            });

            // Add active state to selected navigation item
            item.classList.add("active");

            // Hide all sections
            sections.forEach((section) => {
                section.classList.remove("active");
            });

            // Show selected section
            const targetSection = document.getElementById(target);

            if (targetSection) {
                targetSection.classList.add("active");
            }

            // Update URL
            window.location.hash = target;
        });
    });

    // Open page based on URL hash
    const hash = window.location.hash.replace("#", "");

    if (hash) {
        const targetNav = document.querySelector(
            `.nav-item[data-section="${hash}"]`
        );

        if (targetNav) {
            targetNav.click();
        }
    }
}

// ==========================================
// New Project Modal
// ==========================================

function initializeModal() {
    const modal = document.getElementById("projectModal");
    const openButton = document.getElementById("newProjectBtn");
    const closeButton = document.getElementById("closeModal");
    const cancelButton = document.getElementById("cancelProject");
    const projectForm = document.getElementById("projectForm");

    if (!modal) {
        return;
    }

    // Open modal
    openButton?.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // Close modal
    closeButton?.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Cancel project creation
    cancelButton?.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Submit project form
    projectForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        const projectName =
            document.getElementById("projectName")?.value.trim();

        const projectDescription =
            document.getElementById("projectDescription")?.value.trim();

        if (!projectName) {
            alert("Please enter a project name.");
            return;
        }

        console.log("New project created:", {
            name: projectName,
            description: projectDescription
        });

        alert(`Project "${projectName}" created successfully!`);

        // Reset form
        projectForm.reset();

        // Close modal
        modal.classList.remove("show");
    });

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.classList.remove("show");
        }
    });
}

// ==========================================
// Task Board
// ==========================================

function initializeTaskBoard() {
    const taskCards = document.querySelectorAll(".task-card");

    taskCards.forEach((card) => {
        card.addEventListener("click", () => {

            // Remove selected state from other tasks
            taskCards.forEach((task) => {
                task.classList.remove("selected");
            });

            // Select clicked task
            card.classList.add("selected");

            // Get task title
            const taskTitle =
                card.querySelector(".task-title")?.textContent ||
                "Selected task";

            console.log(`Selected task: ${taskTitle}`);
        });
    });
}

// ==========================================
// Notifications
// ==========================================

function initializeNotifications() {
    const notificationButton =
        document.querySelector(".notification-btn");

    notificationButton?.addEventListener("click", () => {
        alert("You have 3 new DevOps notifications.");
    });
}

// ==========================================
// Console / Application Startup
// ==========================================

function initializeConsole() {
    console.log("=================================");
    console.log("DevTrack application initialized");
    console.log("Environment: Development");
    console.log("Version: 0.2.0");
    console.log("=================================");
}