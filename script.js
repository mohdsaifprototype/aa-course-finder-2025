import { courseCategories, courses } from "./data.js";

// Helper function to format currency amounts
function formatAmount(amount) {
  if (!amount) return "N/A";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

let selectedCourse = null;
let filteredCourses = [];

// Function to show courses based on the selected duration
function showCategoriesByDuration() {
  const selectedDuration = document.getElementById("duration").value;
  const interestSelect = document.getElementById("interest");
  interestSelect.innerHTML = "";

  if (selectedDuration) {
    filteredCourses = courses.filter(
      (course) => course.duration === selectedDuration
    );
    const categories = courseCategories[selectedDuration];

    // Add "All Courses" option
    const allOption = document.createElement("option");
    allOption.value = "All";
    allOption.textContent = "All Courses";
    interestSelect.appendChild(allOption);

    // Add category options
    categories.forEach((category) => {
      const categoryOption = document.createElement("option");
      categoryOption.value = category;
      categoryOption.textContent = category;
      interestSelect.appendChild(categoryOption);
    });

    displayCourses(filteredCourses);
  } else {
    displayCourses([]);
  }

  const resultText = document.getElementById("result-text");
  resultText.style.display = filteredCourses.length > 0 ? "block" : "none";
}

// Function to filter and display courses based on selected category
function selectCategory() {
  const category = document.getElementById("interest").value;

  let filteredByCategory;
  if (category === "All") {
    filteredByCategory = filteredCourses;
  } else {
    filteredByCategory = filteredCourses.filter(
      (course) => course.categories.includes(category) // Check if the course belongs to the selected category
    );
  }

  displayCourses(filteredByCategory);

  const resultText = document.getElementById("result-text");
  resultText.style.display = filteredByCategory.length > 0 ? "block" : "none";
}

const footer = document.createElement("footer");
footer.innerHTML = `
  <div>Made By Shahwaj under the guidance Mohd Saif <a href="https://portfolio.pmsprototype.com/mohd-saif/" target="_blank">(@mohdsaifprototype)</a></div>
`;
footer.style.cssText = `
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 12px;
`;
document.body.appendChild(footer);

// Function to display courses in the grid
function displayCourses(coursesToDisplay) {
  const courseGrid = document.getElementById("course-grid");
  courseGrid.innerHTML = "";

  if (coursesToDisplay.length > 0) {
    coursesToDisplay.forEach((course) => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      courseCard.setAttribute("onclick", `showCourseDetail('${course.name}')`);
      courseCard.innerHTML = `
        <h4>
          ${course.name} <i class="fa-solid fa-right-long fa-beat"></i>
        </h4>
      `;
      courseGrid.appendChild(courseCard);
    });
  } else {
    courseGrid.innerHTML = "<p>No courses found</p>";
  }
}

// Function to show course details
function showCourseDetail(courseName) {
  selectedCourse = courses.find((course) => course.name === courseName);

  document.getElementById("course-detail-title").textContent =
    selectedCourse.name;

  // Update tables with course details
  document.getElementById("course-detail-table1").innerHTML = `
    <td>${selectedCourse.courseCode}</td>
    <td>${selectedCourse.name}</td>
    <td>${selectedCourse.months} months</td>
    <td>${
      selectedCourse.terms.filter((term) => term.length > 0).length || "N/A"
    }</td>
  `;

  // Display terms in accordion
  if (selectedCourse.terms.some((term) => term.length > 0)) {
    document.getElementById("course-detail-accordion").style.display = "block";
    const accordionContent = document.getElementById(
      "course-detail-accordion-content"
    );
    accordionContent.innerHTML = "";

    selectedCourse.terms.forEach((termContent, index) => {
      if (termContent.length > 0) {
        accordionContent.innerHTML += `
          <div class="accordion-item">
            <button class="accordion-button">Term ${index + 1}</button>
            <div class="accordion-content">
              <ul>
                ${termContent.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        `;
      }
    });
    setupAccordion();
  } else {
    document.getElementById("course-detail-accordion").style.display = "none";
  }

  // Update payment details with formatted amounts (matching 3-column structure in HTML)
  document.getElementById("course-detail-table2").innerHTML = `
    <td>${formatAmount(selectedCourse.totalFees)}</td>
    <td>${formatAmount(selectedCourse.registrationFees)}</td>
    <td>${formatAmount(selectedCourse.downPayment)}</td>
    <td>${formatAmount(selectedCourse.lumpSum) || "N/A"}</td>
  `;

  // Calculate yearly installments for long-term courses
  const yearlyAmount =
    selectedCourse.duration === "Long"
      ? Math.round(
          selectedCourse.totalFees / Math.ceil(selectedCourse.months / 12)
        )
      : null;
  const yearlyPayments = yearlyAmount
    ? selectedCourse.degree
      ? "N/A"
      : `${formatAmount(yearlyAmount)} &times; ${Math.ceil(
          selectedCourse.months / 12
        )}`
    : "N/A";

  // Update installment methods table (matching HTML structure)
  document.getElementById("course-detail-table3").innerHTML = `
    <td>${yearlyPayments}</td>
    <td>${
      selectedCourse.months <= 9
        ? "N/A"
        : formatAmount(selectedCourse.installments)
    }</td>
    <td>${
      selectedCourse.months <= 9
        ? "N/A"
        : selectedCourse.totalNoOfQuarterlyInstallments
    }</td>
    <td>${
      selectedCourse.months <= 9
        ? "N/A"
        : formatAmount(selectedCourse.totalSubmission)
    }</td>
  `;

  // Update monthly EMI plans with multiplication signs

  if (selectedCourse.degree) {
    document.getElementById("course-detail-table4").innerHTML =
      "<td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td>";
  } else {
    if (selectedCourse.monthlyInstallments_1 <= 0 || selectedCourse.months < 4 || (selectedCourse.months - 1) <= 0) {
      document.getElementById(
        "course-detail-table4"
      ).innerHTML = `<td>N/A</td>`;
    } else {
      document.getElementById(
        "course-detail-table4"
      ).innerHTML = `<td>${formatAmount(
        selectedCourse.monthlyInstallments_1
      )} &times; ${selectedCourse.months - 1}</td>`;
    }
    if (selectedCourse.monthlyInstallments_2 <= 0 || selectedCourse.months < 4 || (selectedCourse.months - 2) <= 0) {
      document.getElementById(
        "course-detail-table4"
      ).innerHTML += `<td>N/A</td>`;
    } else {
      document.getElementById(
        "course-detail-table4"
      ).innerHTML += `<td>${formatAmount(
        selectedCourse.monthlyInstallments_2
      )} &times; ${selectedCourse.months - 2}</td>`;
    }
    if (selectedCourse.monthlyInstallments_3 <= 0 || selectedCourse.months < 4 || (selectedCourse.months - 3) <= 0) {
      document.getElementById(
        "course-detail-table4"
      ).innerHTML += `<td>N/A</td>`;
    } else {
      document.getElementById(
        "course-detail-table4"
      ).innerHTML += `<td>${formatAmount(
        selectedCourse.monthlyInstallments_3
      )} &times; ${selectedCourse.months - 3}</td>`;
    }
    if (selectedCourse.monthlyInstallments_4 <= 0 || selectedCourse.months < 4 || (selectedCourse.months - 4) <= 0) {
      document.getElementById(
        "course-detail-table4"
      ).innerHTML += `<td>N/A</td>`;
    } else {
      document.getElementById(
        "course-detail-table4"
      ).innerHTML += `<td>${formatAmount(
        selectedCourse.monthlyInstallments_3
      )} &times; ${selectedCourse.months - 4}</td>`;
    }
  }

  document.getElementById("course-detail-section").style.display = "block";
}

// Function to setup accordion behavior
function setupAccordion() {
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
}

// Function to go back to the course list
function goBack() {
  document.getElementById("course-detail-section").style.display = "none";
}

// Show dropdown when Search by Interest field is clicked
document.getElementById("interest").addEventListener("focus", function () {
  const dropdown = document.getElementById("dropdown");
  if (dropdown) {
    dropdown.style.display = "block";
  }
});

// Hide dropdown when clicking anywhere else
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown");
  if (
    dropdown &&
    !event.target.closest("#interest") &&
    !event.target.closest("#dropdown")
  ) {
    dropdown.style.display = "none";
  }
});

// Show categories when Search by Interest field is changed
document.getElementById("interest").addEventListener("change", selectCategory);

// Ensure functions are accessible globally
window.showCategoriesByDuration = showCategoriesByDuration;
window.selectCategory = selectCategory;
window.showCourseDetail = showCourseDetail;
window.goBack = goBack;
