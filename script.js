document.getElementById('calc-form').addEventListener('submit', function(event) {
    // 1. Prevent the page from refreshing when clicking the button
    event.preventDefault();

    // 2. Grab values from the inputs
    const carMiles = parseFloat(document.getElementById('car-miles').value);
    const electricity = parseFloat(document.getElementById('electricity').value);
    const meatDays = parseFloat(document.getElementById('meat').value);

    // 3. Environmental Calculations (Averages)
    // Car: 0.4 kg CO2 per mile
    // Electricity: 0.8 kg CO2 per kWh
    // Meat diet: roughly 2.5 kg CO2 per day of meat consumption
    const carCarbon = carMiles * 0.4;
    const electricityCarbon = electricity * 0.8;
    const meatCarbon = meatDays * 2.5;

    // Total score
    const totalCarbon = (carCarbon + electricityCarbon + meatCarbon).toFixed(1);

    // 4. Show the score on the screen
    document.getElementById('score').innerText = totalCarbon;

    // 5. Determine the badge award based on score
    let badge = "";
    if (totalCarbon < 20) {
        badge = "🏆 Eco Warrior! Your carbon footprint is remarkably low. Keep it up!";
    } else if (totalCarbon >= 20 && totalCarbon <= 50) {
        badge = "🌱 Planet Friend. You have an average footprint. Try walking or cycling more!";
    } else {
        badge = "⚠️ Carbon Heavy. Consider reducing meat consumption or saving energy at home.";
    }

    document.getElementById('badge-text').innerText = badge;

    // 6. Make the hidden result box visible
    document.getElementById('result-box').classList.remove('hidden');
});