let docStyle = getComputedStyle(document.documentElement);

//get variable
let myVarVal = docStyle.getPropertyValue('--my-variable-name');

//set variable
docStyle.setProperty('--my-variable-name', '#fff');