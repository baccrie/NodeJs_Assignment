/**
 * This module uses the os module to malipulate
 * baccrie
 * return - :
 *
 */

fs = require('fs');
fs.mkdir('./Students', (err) => {
	if (err) {
	  console.log(err);
	}
	else {
	  console.log('Directory Successfully created');
	}
});

/**
 * creates a new file
 * baccrie
 * return tmp
 */
const myName = 'Bakare Rilwan';
const otherInfo = '\nage: 34\nsex: M\nNationality: Nigerian\nphone: +2348060002408'

fs.open('./Students/user.js', 'w', (err, file) => {
	if (err) {
	  console.log('error creating file');
	}
	else {
	  console.log('File has been created')
	}
});

fs.rename('Students', 'Names', (err) => {
	if (err) {
	  console.log('Error creating new files');
	}
	else {
	  console.log('Files renamed successfully');
	}
});

fs.writeFile('./Names/user.js', myName, (err) => {
	if (err) {
	  console.log(err);
	}
	else {
	  console.log('Name successfully Added');
	}
});

fs.appendFile('./Names/user.js', otherInfo, (err) => {
	if (err) {
	 console.log(err);
	}
	else {
	  console.log('File Successfully Upated')
	}
});

fs.rename('Names/user.js', './Names/bakare.js', (err) => {
	if (err) {
	  console.log(err);
	} else {
	    console.log('filename Successfully changed')
	}
});

fs.readFile('Names/bakare.js', 'utf-8', (err, data) => {
	if (err) {
	  console.log(err);
	} else {
	    console.log(data);
	}
});

fs.unlink('./Names/bakare.js', (err) => {
	if (err) {
	  console.log(err);
	} else {
	  console.log('file Successfully deleted')
	}
});

fs.rmdir('./Names', (err) => {
	if (err) {
	  console.log(err);
	} else {
	    ('Names dir Deleted Successfully')
	}
});
