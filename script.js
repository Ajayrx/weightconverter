function convertWeight() {
    
    const kg = parseFloat(document.getElementById('kgInput').value);
  
    if (isNaN(kg) || kg <= 0) {
      alert('Please enter a valid weight in kilograms!');
      return;
    }
  
    
    const grams = (kg * 1000).toFixed(2);
    const pounds = (kg * 2.20462).toFixed(2);
    const ounces = (kg * 35.274).toFixed(2);
  
    
    document.getElementById('grams').textContent = `${grams} grams`;
    document.getElementById('pounds').textContent = `${pounds} pounds`;
    document.getElementById('ounces').textContent = `${ounces} ounces`;
  }
  