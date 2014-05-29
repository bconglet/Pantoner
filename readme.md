## Pantone for Sass & Stylus

A more complete library of 3,193 Pantone colors in a Sass function. Feed it the color number or name and it'll output hex colors. Since it uses a custom Sass function, you must have at least **Sass 3.1.0+**. Contains both Coated (`-c`) and Uncoated (`-u`) colors.

*****

### [Demo & Color Reference](http://pantone4sass.com/)

*****

### Sass Usage

```scss
@import "pantone";

.my-class {
	color: pantone( "519-u" );
	background-color: pantone( "warm-grey-1-c" );
}
```

*****

### Stylus Usage

```stylus
@import "_pantone.styl";

.my-class
  color: pantone( "519-u" )
```

*****

### Contributing

To contribute, you'll need [nodejs](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed. Fork and clone the repo, then visit the directory in the terminal and type `npm install`. After that you can simply run the `grunt` command to watch the files in the project. It'll automatically lint, test, compile, and minify files for you.

**Note:** To change colors, make sure that grunt is running and then edit the JSON files to change or add colors. Grunt is set up to automatically push updated versions of the color library to both the Sass and Stylus versions.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
