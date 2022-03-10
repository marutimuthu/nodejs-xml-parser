var parseString = require('xml2js').parseString;
// var xml = "<root>Hello xml2js!</root>"
var xml = '<?xml version=”1.0" encoding=”UTF-8"?>' +
'<Student>' +
	'<PersonalInformation>' +
		'<FirstName>Sravan</FirstName>' +
		'<LastName>Kumar</LastName>' +
		'<Gender>Male</Gender>' +
	'</PersonalInformation>' +
	'<PersonalInformation>' +
		'<FirstName>Sudheer</FirstName>' +
		'<LastName>Bandlamudi</LastName>' +
		'<Gender>Male</Gender>' +
	'</PersonalInformation>' +
'</Student>';

// console.log(xml)

parseString(xml, function (err, result) {
    // console.dir(result);

    let data = result.Student.PersonalInformation;
    console.dir(data[0].FirstName);

    // let data = JSON.stringify(result)
});