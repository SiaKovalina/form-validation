var formEl = document.createElement('form');
        var bodyEl = document.getElementsByTagName('body')[0];
        bodyEl.appendChild(formEl);
        formEl.name = 'login';
        formEl.action = 'google.com';

        var ageInput = document.createElement('input');
        ageInput.type = 'text';
        ageInput.name = 'age';
        formEl.insertAdjacentElement('beforeend', ageInput);

        var nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = 'username';
        formEl.insertAdjacentElement('beforeend', nameInput);

        var dateInput = document.createElement('input');
        dateInput.type = 'text';
        dateInput.name = 'date';
        formEl.insertAdjacentElement('beforeend', dateInput);

        var inputSubmitEl = document.createElement('input');
        inputSubmitEl.type = 'submit';
        inputSubmitEl.value = 'Validate Me';
        formEl.insertAdjacentElement('beforeend', inputSubmitEl);

        inputSubmitEl.addEventListener('click', validate);

        function validate(e) {
            e.preventDefault();

            var regexAge = /[^0-9]/;
            var regexName = /^user_+/;
            var regexDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

            dateArr = dateInput.value.split('/');
            console.log(dateArr);
            var day = parseInt(dateArr[0], 10);
            console.log(day);
            var month = parseInt(dateArr[1], 10);
            var year = parseInt(dateArr[2], 10);
            console.log(year);

            var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
                months[1] = 29;
            }

            if (regexAge.test(ageInput.value) || !regexName.test(nameInput.value) || !regexDate.test(dateInput.value) || year < 1900 || year > 2200 || month < 1 || month > 12 || day < 1 || day > months[month - 1]) {
                alert('your data is invalid');
            } 
        }

        

        