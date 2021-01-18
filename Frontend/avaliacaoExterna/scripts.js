


document.addEventListener('DOMContentLoaded', function () {






	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	[].forEach.call(document.querySelectorAll('form'), function (form) {
		switch (form.getAttribute('name')) {
			


			case'demo-form-2':

				form.querySelector('.example-2-create-field').addEventListener('click', function (e) {

					e.preventDefault();

					var randomInt1 = getRandomInt(1, 30),
						randomInt2 = getRandomInt(1, 30),
						rules = {
							rule1: {
								name: 'required|integer',
								label: 'Enter an integer value'
							},
							rule2: {
								name: 'required|between-' + randomInt1 + '-' + randomInt2,
								label: 'Enter the between ' + randomInt1 + '-' + randomInt2
							},
							rule3: {
								name: 'required|minlength-' + randomInt1,
								label: 'You need entered more than ' + randomInt1 + ' characters'
							},
							rule4: {
								name: 'required|email',
								label: 'Enter your E-mail address'
							},
							rule5: {
								name: 'required|min-' + randomInt1,
								label: 'You need entered not less than ' + randomInt1 + ' integer value'
							},
							rule6: {
								name: 'required|float',
								label: 'Enter an float or integer number'
							}
						},
						rule = rules['rule' + getRandomInt(1, 6).toString()],
						field = document.createElement('div'),
						inputWrapper = document.createElement('div'),
						input = document.createElement('input'),
						placeholder = document.createElement('label'),
						remover = document.createElement('a'),
						id = 'example-2-interests-' + form.querySelectorAll('.field').length + 1;

					field.setAttribute('class', 'field');
					inputWrapper.setAttribute('class', 'input-wrapper');
					input.setAttribute('name', 'interests[' + (form.querySelectorAll('.field').length + 1) + ']');
					input.setAttribute('id', id);
					input.setAttribute('type', 'text');
					input.setAttribute('data-rule', rule.name);
					input.setAttribute('autocomplete', 'off');
					placeholder.setAttribute('for', id);
					placeholder.setAttribute('class', 'placeholder');
					placeholder.innerHTML = rule.label;
					remover.setAttribute('href', '#');
					remover.setAttribute('class', 'example-2-remove-input fa fa-times');
					remover.setAttribute('title', 'Remove field');

					inputWrapper.appendChild(input);
					inputWrapper.appendChild(placeholder);

					field.appendChild(inputWrapper);
					field.appendChild(remover);

					form.querySelector('.fields-list').appendChild(field);

					input.focus();

				});

				form.addEventListener('click', function (event) {
				    var selectors = form.querySelectorAll('.example-2-remove-input'),
				        element = event.target,
				        index = -1;

				    if (selectors) {

				        while (element && ((index = [].indexOf.call(selectors, element)) === -1)) {
				            element = element.parentElement;
				        }

				        if (index > -1) {
				            (function (e) {
				            	e.preventDefault();
				                
				                var field = this.parentNode;
				                field.parentNode.removeChild(field);

				            }).call(element, event);
				        }
				    }
				});

				new Validator(form, function (err, res) {

					res && new JsSplash('Validation success', {
						closeBtn: false,
						autoClose: 1600
					});
				});
			break;

		}
	});
});