

var fs = require( "fs" ),
	
	// array of csvs to loop through.
	files = [
		'pantone-uncoated.json',
		'pantone-coated.json',
		'pantone-metallic.json',
		'pantone-pastels-neons.json'
	],
	
	// bring in the index template
	pantone_file = fs.readFileSync( "dev/_pantone.scss", "utf8" ),

	// empty vars
	colors = [];



// loop through em
for ( var i = 0; i < files.length; i++ ) {

	var color_file = JSON.parse( fs.readFileSync( "json/" + files[i], "utf8" ) );

	// loop through the colors
	for ( var col = 0; col < color_file.length; col++ ) {

		colors.push( '("'+color_file[col]['pantone']+'" '+color_file[col]['hex']+')' );
	
	} 

}



// replace the position of the generated colors.
pantone_file = pantone_file.replace( "{{pantone_colors}}", colors.join(", ") );


// write out the final index file.
fs.writeFile( '_pantone.scss', pantone_file, function( err ){

	if (err) throw err;
	console.log('Generated _pantone.scss');

});

