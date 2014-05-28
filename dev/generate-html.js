

var csv = require( "ya-csv" ),
	fs = require( "fs" ),
	
	// array of csvs to loop through.
	files = [
		'pantone-uncoated.json',
		'pantone-coated.json',
		'pantone-metallic.json',
		'pantone-pastels-neons.json'
	],
	
	// bring in the index template
	index_file = fs.readFileSync( "dev/index.html", "utf8" ),

	// empty vars
	colors = [];



// loop through em
for ( var i = 0; i < files.length; i++ ) {

	// create a title var and set it based on csv name.
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

	// add a title for this csv to the html
	colors.push( "<h4>" + title + "</h4>" );


	var color_file = JSON.parse( fs.readFileSync( "json/" + files[i], "utf8" ) );

	// loop through the colors
	for ( var col = 0; col < color_file.length; col++ ) {

		colors.push( '<div class="color bg-'+color_file[col]['pantone']+' visible"><span>'+color_file[col]['pantone']+'</span></div>' );
	
	} 

}



// replace the position of the generated colors.
index_file = index_file.replace( "{{pantone_colors}}", colors.join("") );


// write out the final index file.
fs.writeFile( 'index.html', index_file, function( err ){

	if (err) throw err;
	console.log('Generated index.html');

});

