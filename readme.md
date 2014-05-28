## Pantone.scss

A more complete library of 3,193 Pantone colors in a Sass function. Feed it the color number or name and it'll output hex colors. Since it uses a custom Sass function, you must have at least **Sass 3.1.0+**.

*****

### Usage

```scss
@import "pantone";

.my-class {
	color: pantone( "519" );
	background-color: pantone( "warm-grey-1-c" );
}
```

The _pantone.scss file itself doesn't output anything, so including it on its own doesn't add to your compiled codebase. It has a `pantone_classes` mixin that can be used to generate background classes, but that's only for the demo and not intended for production.

#### [Demo &amp; Color List](http://pantone4sass.com/)

*****

### Contributing

To contribute, you'll need [nodejs](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed. Fork and clone the repo, then visit the directory in the terminal and type `npm install`. After that you can simply run the `grunt` command to watch the files in the project. It'll automatically lint, test, compile, and minify files for you.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
