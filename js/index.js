function calculate(days, months, years) {
	const today = new Date();
	const born = new Date(`${years}-${months}-${days}`);

	const divi = today.getTime() - born.getTime();
	const Nyears = Math.floor(divi / (1000 * 60 * 60 * 24 * 365.25));
	const Nmonths = Math.floor(
		(divi % (1000 * 60 * 60 * 24 * 365.25)) /
			(1000 * 60 * 60 * 24 * (365.25 / 12))
	);
	const Ndays = Math.floor(
		(divi % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)
	);

	return {
		years: Nyears,
		months: Nmonths,
		days: Ndays,
	};
}

arrow.addEventListener('click', () => {
	const inputDay = parseInt(document.getElementById('inputDay').value);
	const inputMonth = parseInt(document.getElementById('inputMonth').value);
	const inputYear = parseInt(document.getElementById('inputYear').value);

	DateObject = new Date();
	let p = 2020;

	let day, month, year;

	if (
		inputMonth >= 1 &&
		inputMonth <= 12 &&
		inputDay >= 1 &&
		inputYear >= 1900 &&
		inputYear <= DateObject.getFullYear()
	) {
		switch (inputMonth) {
			case 1: {
				if (inputDay <= 31) {
					day = inputDay;
				}
				break;
			}
			case 2: {
				if ((p - inputYear) % 4 == 0) {
					if (inputDay <= 28) {
						day = inputDay;
					}
				} else {
					if (inputDay <= 30) {
						day = inputDay;
					}
				}
				break;
			}
			case 3: {
				if (inputDay <= 31) {
					day = inputDay;
				}
				break;
			}
			case 4: {
				if (inputDay <= 30) {
					day = inputDay;
				}
				break;
			}
			case 5: {
				if (inputDay <= 31) {
					day = inputDay;
				}
				break;
			}
			case 6: {
				if (inputDay <= 30) {
					day = inputDay;
				}
				break;
			}
			case 7: {
				if (inputDay <= 31) {
					day = inputDay;
				}
				break;
			}
			case 8: {
				if (inputDay <= 31) {
					day = inputDay;
				}
				break;
			}
			case 9: {
				if (inputDay <= 30) {
					day = inputDay;
				}
				break;
			}
			case 10: {
				if (inputDay <= 31) {
					day = inputDay;
				}
				break;
			}
			case 11: {
				if (inputDay <= 30) {
					day = inputDay;
				}
				break;
			}
			case 12: {
				if (inputDay <= 31) {
					day = inputDay;
				}
				break;
			}
		}
		month = inputMonth;
		year = inputYear;
	}

	const labels = document.querySelectorAll('label');
	const inputs = document.querySelectorAll('input');

	if (!day) {
		labels[0].style.color = 'hsl(0, 100%, 67%)';
		inputs[0].style.borderColor = 'hsl(0, 100%, 67%)';
	} else {
		labels[0].style.color = 'hsl(0, 0%, 86%)';
		inputs[0].style.borderColor = 'hsl(0, 0%, 86%)';
	}

	if (!month) {
		labels[1].style.color = 'hsl(0, 100%, 67%)';
		inputs[1].style.borderColor = 'hsl(0, 100%, 67%)';
	} else {
		labels[1].style.color = 'hsl(0, 0%, 86%)';
		inputs[1].style.borderColor = 'hsl(0, 0%, 86%)';
	}

	if (!day) {
		labels[2].style.color = 'hsl(0, 100%, 67%)';
		inputs[2].style.borderColor = 'hsl(0, 100%, 67%)';
	} else {
		labels[2].style.color = 'hsl(0, 0%, 86%)';
		inputs[2].style.borderColor = 'hsl(0, 0%, 86%)';
	}

	if (!day || !month || !year) {
		let error = 'Must be a valid date';
		document.querySelector('p').innerText = error;
	} else {
		document.querySelector('p').innerText = '';

		result = calculate(day, month, year);

		document.querySelector('.years').innerText = result.years;
		document.querySelector('.months').innerText = result.months;
		document.querySelector('.days').innerText = result.days;
	}
});
