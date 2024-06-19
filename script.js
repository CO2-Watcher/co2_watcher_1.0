function sanitizeInput(input) {
  input.value = input.value.replace(/[<>]/g, '');
}

document.addEventListener('DOMContentLoaded', function() {
  
  const mobileMenu = document.querySelectorAll('.sidenav');
  M.Sidenav.init(mobileMenu, {});
  
  const tableBody = document.getElementById('table-body');
  const companyTableBody = document.getElementById('company-table-body');
  const sortByNameLink = document.getElementById('sortByName');
  const sortByEmissionLink = document.getElementById('sortByEmission');
  const sortByCO2Link = document.getElementById('sortByCO2');
  const sortByPerCapitaLink = document.getElementById('sortByPerCapita');
  const sortByPopulationLink = document.getElementById('sortByPopulation');
  const sortByCompanyNameLink = document.getElementById('sortByCompanyName');
  const sortByCompanyEmissionLink = document.getElementById('sortByCompanyEmission');
  const sortByCompanyCO2Link = document.getElementById('sortByCompanyCO2');
  const sortByCompanyCountryLink = document.getElementById('sortByCompanyCountry');
  const sortByEmployeesLink = document.getElementById('sortByEmployees');
  const searchCountryInput = document.getElementById('searchCountry');
  const searchCompanyInput = document.getElementById('searchCompany');
  
  const setDirection = () => {
    const htmlElement = document.documentElement;
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    const lang = htmlElement.lang;

    if (rtlLanguages.includes(lang)) {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
    }
  };
  setDirection();

  let countryData = [
    { land: 'USA', emissionen: '12%', co2: 5000, perCapita: 15.2, population: 331 }, 
    { land: 'Deutschland', emissionen: '8%', co2: 800, perCapita: 9.7, population: 83 }, 
    { land: 'China', emissionen: '28%', co2: 10000, perCapita: 7.1, population: 1441 }, 
    { land: 'Indien', emissionen: '7%', co2: 2500, perCapita: 1.8, population: 1380 }, 
    { land: 'Russland', emissionen: '5%', co2: 1600, perCapita: 11.2, population: 146 }, 
    { land: 'Japan', emissionen: '3%', co2: 1100, perCapita: 8.7, population: 126 }, 
    { land: 'Kanada', emissionen: '2%', co2: 600, perCapita: 16.9, population: 38 }, 
    { land: 'Brasilien', emissionen: '1.5%', co2: 500, perCapita: 2.4, population: 213 }, 
    { land: 'Vereinigtes Königreich', emissionen: '1.2%', co2: 400, perCapita: 5.9, population: 68 }, 
    { land: 'Frankreich', emissionen: '1%', co2: 300, perCapita: 4.6, population: 65 }, 
    { land: 'Italien', emissionen: '0.9%', co2: 250, perCapita: 4.2, population: 60 }, 
    { land: 'Südkorea', emissionen: '1.7%', co2: 700, perCapita: 13.5, population: 52 },
  ];

  let companyData = [
    { unternehmen: 'ExxonMobil', land: 'USA', emissionen: '2%', co2: 1000, employees: 75000 },
    { unternehmen: 'RWE', land: 'Deutschland', emissionen: '0.4%', co2: 200, employees: 19000 },
    { unternehmen: 'State Grid', land: 'China', emissionen: '6%', co2: 3000, employees: 917000 },
    { unternehmen: 'Coal India', land: 'Indien', emissionen: '1.4%', co2: 700, employees: 272000 },
    { unternehmen: 'Gazprom', land: 'Russland', emissionen: '1%', co2: 500, employees: 466000 },
    { unternehmen: 'JXTG Holdings', land: 'Japan', emissionen: '0.6%', co2: 300, employees: 44000 },
    { unternehmen: 'Suncor Energy', land: 'Kanada', emissionen: '0.4%', co2: 200, employees: 13000 },
    { unternehmen: 'Petrobras', land: 'Brasilien', emissionen: '0.3%', co2: 150, employees: 57000 },
    { unternehmen: 'BP', land: 'Vereinigtes Königreich', emissionen: '0.2%', co2: 100, employees: 67000 },
    { unternehmen: 'TotalEnergies', land: 'Frankreich', emissionen: '0.16%', co2: 80, employees: 105000 },
    { unternehmen: 'Eni', land: 'Italien', emissionen: '0.14%', co2: 70, employees: 31000 },
    { unternehmen: 'Korea Electric Power', land: 'Südkorea', emissionen: '0.3%', co2: 150, employees: 22000 },
  ];

  const renderTable = (data, tableBody, type) => {
    tableBody.innerHTML = '';
    data.forEach(item => {
      const row = document.createElement('tr');
      if (type === 'country') {
        row.innerHTML = `
          <td>${item.land}</td>
          <td>${item.emissionen}</td>
          <td>${item.co2}</td>
          <td>${item.perCapita}</td>
          <td>${item.population + ' Mio.'}</td>
        `;
      } else if (type === 'company') {
        row.innerHTML = `
          <td>${item.unternehmen}</td>
          <td>${item.land}</td>
          <td>${item.emissionen}</td>
          <td>${item.co2}</td>
          <td>${item.employees}</td>
        `;
      }
      tableBody.appendChild(row);
    });
  };

  const sortByName = () => {
    countryData.sort((a, b) => a.land.localeCompare(b.land));
    renderTable(countryData, tableBody, 'country');
  };

  const sortByEmission = () => {
    countryData.sort((a, b) => b.emissionen - a.emissionen);
    renderTable(countryData, tableBody, 'country');
  };

  const sortByCO2 = () => {
    countryData.sort((a, b) => b.co2 - a.co2);
    renderTable(countryData, tableBody, 'country');
  };

  const sortByPerCapita = () => {
    countryData.sort((a, b) => b.perCapita - a.perCapita);
    renderTable(countryData, tableBody, 'country');
  };

  const sortByPopulation = () => {
    countryData.sort((a, b) => b.population - a.population);
    renderTable(countryData, tableBody, 'country');
  };

  const sortByCompanyName = () => {
    companyData.sort((a, b) => a.unternehmen.localeCompare(b.unternehmen));
    renderTable(companyData, companyTableBody, 'company');
  };

  const sortByCompanyCountry = () => {
    companyData.sort((a, b) => a.land.localeCompare(b.land));
    renderTable(companyData, companyTableBody, 'company');
  };

  const sortByCompanyEmission = () => {
    companyData.sort((a, b) => b.emissionen - a.emissionen);
    renderTable(companyData, companyTableBody, 'company');
  };

  const sortByCompanyCO2 = () => {
    companyData.sort((a, b) => b.co2 - a.co2);
    renderTable(companyData, companyTableBody, 'company');
  };

  const sortByEmployees = () => {
    companyData.sort((a, b) => b.employees - a.employees);
    renderTable(companyData, companyTableBody, 'company');
  };

  const filterCountryTable = () => {
    const searchTerm = searchCountryInput.value.toLowerCase();
    const filteredCountryData = countryData.filter(item => 
      item.land.toLowerCase().includes(searchTerm)
    );
    renderTable(filteredCountryData, tableBody, 'country');
  };

  const filterCompanyTable = () => {
    const searchTerm = searchCompanyInput.value.toLowerCase();
    const filteredCompanyData = companyData.filter(item => 
      item.unternehmen.toLowerCase().includes(searchTerm)
    );
    renderTable(filteredCompanyData, companyTableBody, 'company');
  };

  sortByNameLink.addEventListener('click', (e) => {
    e.preventDefault();
    sortByName();
  });

  sortByEmissionLink.addEventListener('click', (e) => {
    e.preventDefault();
    sortByEmission();
  });

  sortByCO2Link.addEventListener('click', (e) => {
    e.preventDefault();
    sortByCO2();
  });

  sortByPerCapitaLink.addEventListener('click', (e) => {
    e.preventDefault();
    sortByPerCapita();
  });

  sortByPopulationLink.addEventListener('click', (e) => {
    e.preventDefault();
    sortByPopulation();
  });

  sortByCompanyNameLink.addEventListener('click', (e) => {
    e.preventDefault();
    sortByCompanyName();
  });

  sortByCompanyEmissionLink.addEventListener('click', (e) => {
    e.preventDefault();
    sortByCompanyEmission();
  });
  
  sortByCompanyCountryLink.addEventListener('click', (e) => {
    e.preventDefault();
    sortByCompanyCountry();
  });

  sortByCompanyCO2Link.addEventListener('click', (e) => {
    e.preventDefault();
    sortByCompanyCO2();
  });

  sortByEmployeesLink.addEventListener('click', (e) => {
    e.preventDefault();
    sortByEmployees();
  });

  searchCountryInput.addEventListener('keyup', filterCountryTable);
  searchCompanyInput.addEventListener('keyup', filterCompanyTable);

  renderTable(countryData, tableBody, 'country');
  renderTable(companyData, companyTableBody, 'company');
});
