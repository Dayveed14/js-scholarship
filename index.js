function formatInput() {
  var input = document.getElementById("country");
  var firstLetter = input.value.charAt(0);
  var restOfWord = input.value.slice(1).toLowerCase();
  input.value = firstLetter.toUpperCase() + restOfWord;
}
function formatInput2() {
  var input = document.getElementById("firstname");
  var firstLetter = input.value.charAt(0);
  var restOfWord = input.value.slice(1).toLowerCase();
  input.value = firstLetter.toUpperCase() + restOfWord;
}

function formatInput3() {
  var input = document.getElementById("lastname");
  var firstLetter = input.value.charAt(0);
  var restOfWord = input.value.slice(1).toLowerCase();
  input.value = firstLetter.toUpperCase() + restOfWord;
}

function formatInput1() {
  var input = document.getElementById("school");
  var firstLetter = input.value.charAt(0);
  var restOfWord = input.value.slice(1).toLowerCase();
  input.value = firstLetter.toUpperCase() + restOfWord;
}

var age = document.getElementById("age");
var declaredCountry = document.getElementById("country");
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var subject1 = document.getElementById("subject1");
var subject2 = document.getElementById("subject2");
var subject3 = document.getElementById("subject3");
var subject4 = document.getElementById("subject4");
var subject5 = document.getElementById("subject5");
var subject6 = document.getElementById("subject6");
var subject7 = document.getElementById("subject7");
var subject8 = document.getElementById("subject8");

var points = 0;
var points2 = 0;
var points3 = 0;

function calculateAge() {
  var ageValue = parseInt(age.value);
  if (ageValue >= 18 && ageValue <= 24) {
    points = 100;
  } else if (ageValue >= 25 && ageValue <= 30) {
    points = 80;
  } else if (ageValue >= 31 && ageValue <= 35) {
    points = 50;
  } else if (ageValue >= 36 && ageValue <= 40) {
    points = 30;
  } else if (ageValue >= 41) {
    points = 10;
  }
}

function calculateCountry() {
  const africa = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Democratic Republic of the Congo",
    "Republic of the Congo",
    "Cote d'Ivoire",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ];

  const asia = [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Georgia",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar (Burma)",
    "Nepal",
    "North Korea",
    "Oman",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Qatar",
    "Russia",
    "Saudi Arabia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates (UAE)",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ];

  const europe = [
    "Albania",
    "Andorra",
    "Austria",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia (formerly Macedonia)",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Ukraine",
    "United Kingdom (UK)",
    "Vatican City (Holy See)",
  ];

  const southAmerica = [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela",
  ];

  const northAmerica = [
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Canada",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Dominican Republic",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Trinidad and Tobago",
    "United States of America",
  ];

  const oceania = [
    "Australia",
    "Fiji",
    "Kiribati",
    "Marshall Islands",
    "Micronesia",
    "Nauru",
    "New Zealand",
    "Palau",
    "Papua New Guinea",
    "Samoa",
    "Solomon Islands",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
  ];

  var selectedCountry = declaredCountry.value;

  if (africa.includes(selectedCountry)) {
    points2 = 50;
  } else if (asia.includes(selectedCountry)) {
    points2 = 40;
  } else if (europe.includes(selectedCountry)) {
    points2 = 10;
  } else if (northAmerica.includes(selectedCountry)) {
    points2 = 20;
  } else if (southAmerica.includes(selectedCountry)) {
    points2 = 30;
  } else if (oceania.includes(selectedCountry)) {
    points2 = 10;
  }
}

function calculateGrade() {
  var grade =
    Number(subject1.value) +
    Number(subject2.value) +
    Number(subject3.value) +
    Number(subject4.value) +
    Number(subject5.value) +
    Number(subject6.value) +
    Number(subject7.value) +
    Number(subject8.value);

  var averageGrade = grade / 8;

  if (averageGrade >= 90) {
    points3 = 150;
  } else if (averageGrade >= 85 && averageGrade <= 89) {
    points3 = 140;
  } else if (averageGrade >= 75 && averageGrade <= 84) {
    points3 = 120;
  } else if (averageGrade >= 65 && averageGrade <= 74) {
    points3 = 100;
  } else if (averageGrade >= 60 && averageGrade <= 64) {
    points3 = 80;
  } else if (averageGrade >= 50 && averageGrade <= 59) {
    points3 = 50;
  } else if (averageGrade <= 49) {
    points3 = 20;
  }
}

function computeScholarship() {
  if (
    !firstName.value ||
    !lastName.value ||
    !country.value ||
    !age.value ||
    !subject1.value ||
    !subject2.value ||
    !subject3.value ||
    !subject4.value ||
    !subject5.value ||
    !subject6.value ||
    !subject7.value ||
    !subject8.value
  ) {
    return alert("Please fill out all forms inputs!");
  }

  calculateAge();
  calculateCountry();
  calculateGrade();

  var setFirstName = firstName.value;
  var setLastName = lastName.value;
  user_name = setFirstName + " " + setLastName;
  total_score = points + points2 + points3;
  if (total_score >= 180) {
    result.style.color = "green";
    result.style.backgroundColor = "white";
    result.style.padding = "10px 20px";
    result.innerHTML = `Congratulations, ${user_name} ! You are eligible for a scholarship. Your score is ${total_score}`;
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Age", "Country", "Grade"],
        datasets: [
          {
            label: "# of Points",
            data: [points, points2, points3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } else {
    result.style.color = "red";
    result.style.backgroundColor = "white";
    result.style.padding = "10px 20px";
    result.innerHTML = `Sorry, ${user_name}! Your scholarship application has been declined. Your score is ${total_score}`;
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Age", "Country", "Grade"],
        datasets: [
          {
            label: "# of Points",
            data: [points, points2, points3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
