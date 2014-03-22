Pantone for Sass
================

A more complete library of Pantone colors in Sass variables. Currently, it only contains basic Pantone colors and the coating colors.

Usage:

	@import "pantone";

	.my-class {
		color: pantone( "519" );
		background-color: pantone( "warm-grey-1-c" );
	}

The _pantone.scss file itself doesn't output anything, so including it on its own doesn't add to your compiled codebase.

See all the colors, and their codes at http://jpederson.github.io/Pantone-for-Sass/