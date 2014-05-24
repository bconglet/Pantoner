## Pantone.scss

A more complete library of 2,275 Pantone colors in a Sass function. Feed it the color number or name and it'll output hex colors in your variables or stylesheets.

Usage:

```sass
@import "pantone";

.my-class {
	color: pantone( "519" );
	background-color: pantone( "warm-grey-1-c" );
}
```

The _pantone.scss file itself doesn't output anything, so including it on its own doesn't add to your compiled codebase. It has a `pantone_classes` mixin that can be used to generate background classes, but that's only for the demo and not intended for production.

See all the colors, and their codes at http://pantone4sass.com/.

*****

### Contributing

Interested in helping out or contributing? Pull requests are welcome!
