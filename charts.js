// Graph Colors
let lightBlue = "#C9daf8";
let navy = "#073763";
let lightGreen = "#D0E0E3";
let darkGreen = "#14505C";

// Graph Labels
let male = "Male %";
let female = "Female %";

// PSU undergraduate degrees awarded, All majors (2016-2017)
new Chart(document.getElementById("psu-undergrad").getContext('2d'), {
    type: 'pie',
    class: 'pie-charts',
    data: {
      labels: [male, female],
      datasets: [{
        label: "Percent composition",
        backgroundColor: [lightGreen, darkGreen],
        data: [43.2, 56.8]
      }]
    },
    options: {
      plugins: {
        legend: {
          reverse: true
        }
      }
    }
});

// Undergraduate degrees awarded nationally, All majors (2016-2017)
new Chart(document.getElementById("national-undergrad").getContext('2d'), {
    type: 'pie',
    data: {
      labels: [male, female],
      datasets: [{
        label: "Percent composition",
        backgroundColor: [lightBlue, navy],
        data: [43, 57]
      }]
    },
    options: {
      plugins: {
        legend: {
          reverse: true
        }
      }
    }
});

// PSU undergrad Computer Science degrees awarded (2016-2017)
new Chart(document.getElementById("psu-cs").getContext('2d'), {
    type: 'pie',
    data: {
      labels: [male, female],
      datasets: [{
        label: "Percent composition",
        backgroundColor: [lightGreen, darkGreen],
        data: [84, 16]
      }]
    },
    options: {
      plugins: {
        legend: {
          reverse: true
        }
      }
    }
});

// Undergrad CS degrees awarded nationally (2016-2017)
new Chart(document.getElementById("national-cs").getContext('2d'), {
    type: 'pie',
    data: {
      labels: [male, female],
      datasets: [{
        label: "Percent composition",
        backgroundColor: [lightBlue, navy],
        data: [81, 19]
      }]
    }
});

// Comparing Gender Breakdown by Program Level (2017-2018)
new Chart(document.getElementById("gender-breakdown").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["National CS", "PSU: Lower Division", "PSU: Upper Division", "PSU: Post Bac"],
    datasets: [
        {
          label: [male],
          backgroundColor: ["#A2C4C9"],
          data: [81, 83, 89, 79]
        },
        {
          label: [female],
          backgroundColor: [darkGreen],
          data: [19, 17, 11, 21]
        }
    ]
  }
});

// Comparing PSU CS department with National Retention Rates (2017-2018)
new Chart(document.getElementById("retention-rates").getContext('2d'), {
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
    plugins: {
      legend: {
        reverse: true
      }
    }
  }
});

// PSU CS department retention by Legal Sex (2017-2018)
new Chart(document.getElementById("retention-rates-by-legal-sex").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["Overall", "Male", "Female"],
    datasets: [{
      label: ["Undergrad: Preadmission %"],
      backgroundColor: ["#38761D", "#274E14", "#B6D7A8"],
      data: [69, 71, 57]
    }]
  }
});

// PSU CS department retention by Legal Sex (2017-2018)
new Chart(document.getElementById("retention-rates-by-legal-sex-2").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["Undergrad: Preadmission", "UG: Upper Division", "PostBac: Preadmission", "PostBac: Upper Division"],
    datasets: [
        {
          label: ["Overall %"],
          backgroundColor: ["#38761D"],
          data: [69, 92, 58, 87]
        },
        {
          label: [male],
          backgroundColor: ["#274E14"],
          data: [71, 91, 59, 83]
        },
        {
          label: [female],
          backgroundColor: ["#B6D7A8"],
          data: [57, 97, 53, 100]
        }
    ]
  }
});

// Portland State Freshman Retention, All Majors (2014-2017)
new Chart(document.getElementById("psu-freshman-retention").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["2014-2015", "2015-2016", "2016-2017", "2017-2018"],
    datasets: [{
      label: ["Retention Rate %"],
      backgroundColor: [navy],
      data: [69, 72, 71, 74]
    }]
  },
  options: {
    indexAxis: 'y',
  }
});

// Portland State Freshman Retention, CS Majors (2014-2017)
new Chart(document.getElementById("psu-cs-freshman-retention").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019"],
    datasets: [{
      label: ["Retention Rate %"],
      backgroundColor: [darkGreen],
      data: [55, 56, 63, 66, 68]
    }]
  },
  options: {
    indexAxis: 'y'
  }
});

// PSU Entering Freshman Retention, Male CS Students (2014-2018)
new Chart(document.getElementById("psu-cs-freshman-retention-male").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019"],
    datasets: [{
      label: ["Retention Rate %"],
      backgroundColor: [navy],
      data: [55, 57, 64, 67, 71]
    }]
  },
  options: {
    indexAxis: 'y',
  }
});

// PSU Entering Freshman Retention, Female CS Students (2014-2018)
new Chart(document.getElementById("psu-cs-freshman-retention-female").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019"],
    datasets: [{
      label: ["Retention Rate %"],
      backgroundColor: [darkGreen],
      data: [59, 50, 55, 66, 57]
    }]
  },
  options: {
    indexAxis: 'y'
  }
});