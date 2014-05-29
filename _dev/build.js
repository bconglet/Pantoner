

// set some variables
var fs = require( "fs" ),
	csv = require( "fast-csv" ),
	yaml = require( "yamljs" ),
	xml = require('jsontoxml'),
	
	// array of csvs to loop through.
	files = [
		'pantone-uncoated.json',
		'pantone-coated.json',
		'pantone-metallic.json',
		'pantone-pastels-neons.json',
		'pantone-color-of-the-year.json'
	],
	
	// bring in the index file and all the pantone templates
	index_file = fs.readFileSync( "_dev/index.html", "utf8" ),
	scss_file = fs.readFileSync( "_dev/_pantone.scss", "utf8" ),
	stylus_file = fs.readFileSync( "_dev/_pantone.styl", "utf8" ),
	less_file = fs.readFileSync( "_dev/_pantone.less", "utf8" ),

	// empty arrays of colors
	colors_scss = [],
	colors_less = [],
	colors_html = [];



// loop through the files
for ( var i = 0; i < files.length; i++ ) {

	// read the color file
	var color_filename = files[i],
		color_file = JSON.parse( fs.readFileSync( "json/" + color_filename, "utf8" ) ),

		// set some filenames
		color_filename_csv = color_filename.replace( ".json", ".csv" ),
		color_filename_yml = color_filename.replace( ".json", ".yml" ),
		color_filename_xml = color_filename.replace( ".json", ".xml" ),

		// empty some arrays for each file
		colors_xml = [],

		// create a fresh csv stream
		csv_stream = csv.createWriteStream({ headers: true }),
	    writable_csv_stream = fs.createWriteStream( 'csv/'+ color_filename_csv );


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

		case "pantone-color-of-the-year.json":
			title = "Pantone Colors of the Year";
		break;

		case "pantone-uncoated.json":
		default:
			title = "Pantone Uncoated Colors";
		break;

	}


	// add a title to the html for each section of colors
	colors_html.push( "<h4>" + title + "</h4>" );


	// prepare to write the new csv file
	csv_stream.pipe( writable_csv_stream );


	// loop through the colors
	for ( var col = 0; col < color_file.length; col++ ) {

		// push another line of html
		colors_html.push( '<div class="color bg-'+color_file[col]['pantone']+' visible"><span>'+color_file[col]['pantone']+'</span></div>' );
		
		// push another scss array value
		colors_scss.push( '("'+color_file[col]['pantone']+'" '+color_file[col]['hex']+')' );
		
		// push another less array value
		colors_less.push( '@pantone-'+color_file[col]['pantone']+': '+color_file[col]['hex']+';' );
		
		// push another xml record
		colors_xml.push( xml( { "color": color_file[col] } ) );

		// write a record to the CSV
		csv_stream.write( color_file[col] );
		
	}


	// write the final csv file for this color set
	csv_stream.write( null );
	console.log( "Generated " + color_filename_csv );


	// write out the yaml file for this color set
	fs.writeFile( 'yml/'+color_filename_yml, yaml.stringify( color_file ), function( err ){
		if (err) throw err;
	});
	console.log( 'Generated '+color_filename_yml );


	// write out the yaml file for this color set
	fs.writeFile( 'xml/'+color_filename_xml, colors_xml.join("\n"), function( err ){
		if (err) throw err;
	});
	console.log( 'Generated '+color_filename_xml );
}



// write out the index.html file.
fs.writeFile( 'index.html', index_file.replace( "{{pantone_colors}}", colors_html.join("") ), function( err ){

	if (err) throw err;
	console.log('Generated index.html');

});



// write out the _pantone.scss file.
fs.writeFile( 'scss/_pantone.scss', scss_file.replace( "{{pantone_colors}}", colors_scss.join(", ") ), function( err ){

	if (err) throw err;
	console.log('Generated _pantone.scss');

});



// write out the _pantone.scss file.
fs.writeFile( 'stylus/_pantone.styl', stylus_file.replace( "{{pantone_colors}}", colors_scss.join(" ") ), function( err ){

	if (err) throw err;
	console.log('Generated _pantone.styl');

});



// write out the _pantone.scss file.
fs.writeFile( 'less/_pantone.less', less_file.replace( "{{pantone_colors}}", colors_less.join("\n") ), function( err ){

	if (err) throw err;
	console.log('Generated _pantone.less');

});

