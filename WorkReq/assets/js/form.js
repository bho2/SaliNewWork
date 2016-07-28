var app = new cot_app("WRP Form API");

function renderCFrame() {
	//ADD ALL THE LINKS YOU WANT TO THE APPLICATION BREADCRUMB
	app.setBreadcrumb([	
		{"name":"WRP Application API", "link": "#"} 
	]);
	//INCLUDE ANY NECCESSARY JS/CSS LIBRARIES
	//FORMS TYPICALLY USE AT LEAST THE FOLLWOIGN 3 LIBRARIES
	app.includeDatePicker=app.includeFormValidation=app.includePlaceholders=app.includeMultiSelect=true;
	//RENDER THE FINISHED PAGE AND THEN CALL A CALLBACK FUNCTION WHEN COMPLETE
	app.render(initialize);
}

function initialize() {
	var sHTML = "";

	sHTML += "<h3>Form Layout</h3>";
	sHTML +="<ul>";
	sHTML += "<li><a onclick='formSection()'>Form Section</a></li>";
	sHTML += "<li><a onclick='formCol(1)'>1 Column Row</a></li>";
	sHTML += "<li><a onclick='formCol(2)'>2 Column Row</a></li>";
	sHTML += "<li><a onclick='formCol(3)'>3 Column Row</a></li>";
	sHTML += "<li><a onclick='formCol(4)'>4 Column Row</a></li>";
	sHTML += "<li><a onclick='formIrregular()'>Irregular Row</a></li>";
	sHTML += "</ul>"

	sHTML += "<h3>Form Fields</h3>";
	sHTML +="<ul>";
	sHTML += "<li><a onclick='formInput()'>Input</a></li>";
	sHTML += "<li><a onclick='formTextArea()'>Textarea</a></li>";
	sHTML += "<li><a onclick='formStaticText()'>Static Text</a></li>";
	sHTML += "<li><a onclick='formDropdown()'>Dropdown</a></li>";
	sHTML += "<li><a onclick='formRadio()'>Radio</a></li>";
	sHTML += "<li><a onclick='formCheckbox()'>Checkbox</a></li>";
	sHTML += "<li><a onclick='formMultiselect()'>Multiselect</a></li>";
	sHTML += "<li><a onclick='formDatePicker()'>Date Picker</a></li>";
	sHTML += "<li><a onclick='formHTML()'>HTML</a></li>";
	sHTML += "</ul>"

	sHTML += "<h3>Form Validation</h3>";
	sHTML +="<ul>";
	sHTML += "<li><a onclick='formRequired()'>Required</a></li>";
	sHTML += "<li><a onclick='formConditionallyRequired()'>Conditionally Required</a></li>";
	sHTML += "<li><a onclick='formPhoneNumber()'>Phone Number</a></li>";
	sHTML += "<li><a onclick='formEmail()'>Email</a></li>";
	sHTML += "<li><a onclick='formLink()'>Link</a></li>";
	sHTML += "<li><a onclick='formEditMask()'>Regex</a></li>";
	sHTML += "</ul>"
	
	sHTML += "<h3>Form Grids</h3>";
	sHTML +="<ul>";
	sHTML += "<li><a onclick='formGridBasic()'>Basic</a></li>";
	sHTML += "</ul>"	
	
	sHTML += "<h3>Form Events</h3>";
	sHTML +="<ul>";
	sHTML += "<li><a onclick='formClick()'>Click</a></li>";
	sHTML += "<li><a onclick='formChange()'>Change</a></li>";
	sHTML += "</ul>"	
	
	
	sHTML += "<h3>Form Usability</h3>";
	sHTML +="<ul>";
	sHTML += "<li><a onclick='formPlaceholder()'>Placeholder</a></li>";
	sHTML += "<li><a onclick='formHelpText()'>Help Text</a></li>";
	sHTML += "<li><a onclick='formDefaults()'>Default Values</a></li>";
	sHTML += "<li><a onclick='formConditionalDisplay()'>Conditional Display</a></li>";
	sHTML += "</ul>"

	$("#app-content-right").html(app.getTeaserStandard({"title": "Examples","body": sHTML}));
}

function formSection() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-sectionexampleNoTitle"
	}));
	s1.addRow(new cot_row([
		{"id":"notitle","type":"html","html":"<p>No Title Example</p>"}
	]));
	f.addSection(new cot_section({
		"id":"fh-sectionexampleA",
		"title":"Default Section Example"
	}));
	f.addSection(new cot_section({
		"id":"fh-sectionexampleB",
		"title":"Primary Section Example",
		"class":"panel-primary"
	}));	
	f.addSection(new cot_section({
		"id":"fh-sectionexampleB",
		"title":"Success Section Example",
		"class": "panel-success"
	}));
	f.addSection(new cot_section({
		"id":"fh-sectionexampleB",
		"title":"Info Section Example",
		"class": "panel-info"
	}));
	f.addSection(new cot_section({
		"id":"fh-sectionexampleB",
		"title":"Warning Section Example",
		"class": "panel-warning"
	}));
	f.addSection(new cot_section({
		"id":"fh-sectionexampleB",
		"title":"Danger Section Example",
		"class": "panel-danger"
	}));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	var s3 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));		
	s3.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}


function formCol(numCols) {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-rowcolumnexample",
		"title":numCols + " Column Row Example"
	}));
	var arr = [];
	for (var i=1; i <= numCols; i++) {
		arr.push({"id":"field" + i,"title":"Field " + i});
	}
	
	s1.addRow(new cot_row(arr));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formIrregular() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-rowcolumnexample",
		"title":"Irregular Column Row Example"
	}));
	s1.addRow(new cot_row([
		{"id":"suffix","title":"Suffix","class":"col-xs-12 col-sm-2"},
		{"id":"firstname","title":"First Name","class":"col-xs-12 col-sm-5"},
		{"id":"lastname","title":"Last Name","class":"col-xs-12 col-sm-5"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formInput() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-input",
		"title":"Input Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"fieldA","title":"Field A"},
		{"id":"fieldB","title":"Field B"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formTextArea() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-textarea",
		"title":"Textarea Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"fieldA","title":"Field A","type":"textarea"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formMultiselect() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-multiselect",
		"title":"Multiselect Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"colorA","title":"Favorite Color Option Box","type":"multiselect","choices":[{"text":"red","value":"red"},{"text":"blue","value":"blue"},{"text":"green","value":"green"}],"options": {numberDisplayed: 1,selectAllValue: 'ALL',nonSelectedText: 'Select a Color',allSelectedText: 'All'}}
	]));
	s1.addRow(new cot_row([
		{"id":"colorB","title":"Favorite Color Check Box","type":"multiselect","multiple":true,"choices":[{"text":"red","value":"red"},{"text":"blue","value":"blue"},{"text":"green","value":"green"}],"options": {includeSelectAllOption: true,numberDisplayed: 2,selectAllValue: 'ALL',nonSelectedText: 'Select a Color',allSelectedText: 'All'}}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formStaticText() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-statictext",
		"title":"Static Text Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"firstname","title":"First Name","type":"static","value":"Rob"},
		{"id":"lastname","title":"Last Name","type":"static","value":"Williams"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formDropdown() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-statictext",
		"title":"Dropdown Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"favoritecolor","title":"Favorite Color","type":"dropdown","choices":[{"text":"Select Color...","value":""},{"text":"blue","value":"blue"},{"text":"green","value":"green"}]}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formRadio() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-radio",
		"title":"Radio Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"favoritecolorA","title":"Favorite Color Vertical","type":"radio","choices":[{"text":"blue","value":"blue"},{"text":"green","value":"green"}]},
		{"id":"favoritecolorB","title":"Favorite Color Horizontal","type":"radio","orientation":"horizontal","choices":[{"text":"blue","value":"blue"},{"text":"green","value":"green"}]}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formCheckbox() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-radio",
		"title":"Checkbox Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"favoritecolor","title":"Favorite Color Vertical","type":"checkbox","choices":[{"text":"blue","value":"blue"},{"text":"green","value":"green"}]},
		{"id":"favoritecolor","title":"Favorite Color Horizontal","type":"checkbox","orientation":"horizontal","choices":[{"text":"blue","value":"blue"},{"text":"green","value":"green"}]}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formPlaceholder() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-placeholder",
		"title":"Placeholder Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"phone","title":"Phone","placeholder":"###-###-####"},
		{"id":"postal","title":"Postal Code","placeholder":"X#X #X#"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formHelpText() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-helptext",
		"title":"Helptext Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"givenname","title":"Given Name(s)","prehelptext":"Please enter your first and middle name."},
		{"id":"citizenship","title":"Citizenship","posthelptext":"This information is only for internal purposes and will not be publicly disclosed."}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formHTML() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-html",
		"title":"HTML Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"htmltest","title":"Field Label","type":"html","html":"Put any html here!"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formDatePicker() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-datetime",
		"title":"Date Time Picker Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"defaultSelect","title":"Date & Time Picker","type":"datetimepicker","options": {}},
		{"id":"dateSelect","title":"Date Picker","type":"datetimepicker","options": {format: 'DD/MM/YYYY'}},
		{"id":"timeSelect","title":"Time Picker","type":"datetimepicker","options": {format: 'LT'}}
	]));
	s1.addRow(new cot_row([
		{"id":"daySelect","title":"Day Picker","type":"datetimepicker","options": {format: 'DD/MM/YYYY'}},
		{"id":"monthSelect","title":"Month Picker","type":"datetimepicker","options": {viewMode: 'months',format:'MMM'}},
		{"id":"yearSelect","title":"Year Picker","type":"datetimepicker","options": {viewMode: 'years',format:'YYYY'}}
	]));

	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}

function formRequired() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-required",
		"title":"Required Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"fieldA","title":"Field A","required":true},
		{"id":"fieldB","title":"Field B","required":true}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}	
function formConditionallyRequired() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-required",
		"title":"Conditionally Required Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"fieldQ","title":"Do you have a favorite color?","type":"radio","choices": [{"text":"Yes","value":"Yes"},{"text":"No","value":"No"}],"required": true,"validators": {callback: {callback: function(value,validator,$field) {if(value=="Yes"&& $("#fieldA").val().trim()=="") {validator.updateStatus('fieldA', validator.STATUS_INVALID, 'callback');} else {validator.updateStatus('fieldA', validator.STATUS_VALID, 'callback');}; return true;}}}}
	]));
	s1.addRow(new cot_row([
		{"id":"fieldA","title":"What is it?","validators": {callback: {message: 'You must specify your favorite color if you have one.', callback: function(value,validator,$field) {return $("#fieldQ:checked").val()=="No"||value.trim()!="";}}}}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}	
function formPhoneNumber() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-required",
		"title":"Phone Number Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"fieldPhone","title":"Phone Number","required": true,"validationtype":"Phone"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formEmail() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-required",
		"title":"Email Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"fieldEmail","title":"Email Address","validationtype":"Email"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formLink() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-required",
		"title":"Link Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"fieldLink","title":"URL Address","validationtype":"URL"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formEditMask() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-required",
		"title":"Link Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"fieldA","title":"Driver's License","placeholder":"#######-#######-0#","validators": {regexp: {regexp: /(^[A-Za-z]{1}(\d{4})[-](\d{5})[-](\d{5})$)|(^(\d{9})$)|(^[A-Za-z]{1}(\d{14})$)/,  message: 'The driver license number must be in the format of a driver license number (X####-#####-#####) or R.I.N (#########).'}}}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formDefaults() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-input",
		"title":"Defaults Example"
	}));			
	s1.addRow(new cot_row([
		{"id":"firstName","title":"First Name","value":"Rob"},
		{"id":"lastName","title":"Last Name","value":"Williams"}
	]));
	s1.addRow(new cot_row([
		{"id":"gender","title":"Gender","type":"radio","choices":[{"text":"Male"},{"text":"Female"}],"value":"Male"},
		{"id":"city","title":"City","type":"dropdown","choices":[{"text":"Toronto"},{"text":"Mississauga"},{"text":"Oakville"}],"value":"Oakville"}
	]));
	s1.addRow(new cot_row([
		{"id":"favoriteFood","title":"Favorite Foods","type":"checkbox","orientation":"horizontal","choices":[{"text":"Cheese","selected":true},{"text":"Cookies"},{"text":"Steak","selected":true},{"text":"Sushi","selected":true}]}
	]));
	s1.addRow(new cot_row([
		{"id":"dob","title":"Date of Birth","type":"datetimepicker","value":"26/04/1972","options": {format: 'DD/MM/YYYY'}}
	]));
	s1.addRow(new cot_row([
		{"id":"bio","title":"Biography","type":"textarea","value":"blah de blah de blah blah blah"}
	]));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
function formGridBasic() {
	var f = new cot_form({
		"id":"fh-form",
		"title":"Web Revitalization Form JS API"
	});
	var s1 = f.addSection(new cot_section({
		"id":"fh-input",
		"title":"Defaults Example"
	}));			
	s1.addGrid(new cot_grid({
		"add":true,
		"title" :'My Grid Title',
		"headers":[{"title":"First Name"},{"title":"Last Name"}], 
		"fields" :[{"id":"firstName","title":"First Name"},{"id":"lastName","title":"Last Name"}]
	}));
	var jsonSnaphot = JSON.stringify(f,null, 2);
	
	var s2 = f.addSection(new cot_section({
		"id":"fh-code",
		"title":"Code"
	}));			
	s2.addRow(new cot_row([
		{"id":"codeexample","type":"html","html":"<pre id='json'>" + jsonSnaphot + "</pre>"},
	]));
	$("#app-content-left").html("");
	f.render({"target":"#app-content-left"});
}
$(document).ready(function() {
	renderCFrame();
});