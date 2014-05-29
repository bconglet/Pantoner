

// set some variables
var fs = require( "fs" ),
	
	// array of csvs to loop through.
	files = [
		'pantone-uncoated.json',
		'pantone-coated.json',
		'pantone-metallic.json',
		'pantone-pastels-neons.json'
	],
	
	// bring in the index and pantone template
	index_file = fs.readFileSync( "dev/index.html", "utf8" ),
	pantone_file = fs.readFileSync( "dev/_pantone.scss", "utf8" ),

	// empty arrays of colors
	colors_scss = [],
	colors_html = [];



// loop through the files
for ( var i = 0; i < files.length; i++ ) {

	// read the color file
	var color_file = JSON.parse( fs.readFileSync( "json/" + files[i], "utf8" ) );


	// create a title var and set it based on filename.
	var title;
	switch ( files[i] ) {

		case "pantone-coated.json":
			title = "Pantone Coated Colors";
		break;

		case "pantone-metallic.json":
			title = "Pantone Metallic Colors";
		break;

		case "pantone-pastels-neons.json":
			title = "Pantone Pastels & Neons";
		break;

		case "pantone-uncoated.json":
		default:
			title = "Pantone Uncoated Colors";
		break;

	}


	// add a title to the html for each section of colors
	colors_html.push( "<h4>" + title + "</h4>" );


	// loop through the colors
	for ( var col = 0; col < color_file.length; col++ ) {

		// push another line of html
		colors_html.push( '<div class="color bg-'+color_file[col]['pantone']+' visible"><span>'+color_file[col]['pantone']+'</span></div>' );
		
		// push another scss array value
		colors_scss.push( '("'+color_file[col]['pantone']+'" '+color_file[col]['hex']+')' );

	} 

}



// write out the index.html file.
fs.writeFile( 'index.html', index_file.replace( "{{pantone_colors}}", colors_html.join("") ), function( err ){

	if (err) throw err;
	console.log('Generated index.html');

});



// write out the _pantone.scss file.
fs.writeFile( 'scss/_pantone.scss', pantone_file.replace( "{{pantone_colors}}", colors_scss.join(", ") ), function( err ){

	if (err) throw err;
	console.log('Generated _pantone.scss');

});

