// Graph Colors
let lightBlue = "rgb(7, 55, 99)";
let navy = "rgb(201, 218, 248)";
let lightGreen = "#D0E0E3";
let darkGreen = "#14505C";

// Graph Labels
let male = "Male";
let female = "Female";

// Create PSU Undergrad Chart
new Chart(document.getElementById("psu-undergrad").getContext('2d'), {
    type: 'pie',
    data: {
      labels: [male, female],
      datasets: [{
        label: "Percent composition",
        backgroundColor: [navy, lightBlue],
        data: [43.2, 56.8]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
      plugins: {
        legend: {
          reverse: true
        }
      }
    }
});

// Create National Undergrad Chart
new Chart(document.getElementById("national-undergrad").getContext('2d'), {
    type: 'pie',
    data: {
      labels: [male, female],
      datasets: [{
        label: "Percent composition",
        backgroundColor: [lightGreen, darkGreen],
        data: [43, 57]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
      plugins: {
        legend: {
          reverse: true
        }
      }
    }
});

// Create PSU CS Chart
new Chart(document.getElementById("psu-cs").getContext('2d'), {
    type: 'pie',
    data: {
      labels: [male, female],
      datasets: [{
        label: "Percent composition",
        backgroundColor: [navy, lightBlue],
        data: [84, 16]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
      plugins: {
        legend: {
          reverse: true
        }
      }
    }
});

// Create National CS Chart
new Chart(document.getElementById("national-cs").getContext('2d'), {
    type: 'pie',
    data: {
      labels: [male, female],
      datasets: [{
        label: "Percent composition",
        backgroundColor: [lightGreen, darkGreen],
        data: [81, 19]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
      plugins: {
        legend: {
          reverse: true
        }
      }
    }
});

// Create Retenation Rate Bar Graph
new Chart(document.getElementById("retention-rates").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["National CS", "PSU: Lower Division", "PSU: Upper Division", "PSU: Post Bac"],
    datasets: [{
      label: ["Retention Rate %"],
      backgroundColor: [lightGreen, darkGreen, darkGreen, darkGreen],
      data: [81, 83, 89, 79]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    },
    plugins: {
      legend: {
        reverse: true
      }
    }
  }
});

// Create Retenation Rate Bar Graph
new Chart(document.getElementById("retention-rates-2").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["National", "PSU Overall", "CS Overall", "CS Male", "CS Female"],
    datasets: [{
      label: ["Retention Rate %"],
      backgroundColor: ["#073763", "#1C4487", "#3D78D8", "#0B5394", "#6D9FEB"],
      data: [81, 74, 69, 71, 57]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    },
    plugins: {
      legend: {
        reverse: true
      }
    }
  }
});