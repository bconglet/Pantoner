## Pantone for Sass, LESS & Stylus

A more complete library of 3,193 Pantone colors implemented in Sass, LESS, and Stylus. Feed it the color number or name and it'll output hex colors. Contains the following sets of colors:

- Coated (`-c`)
- Uncoated (`-u`)
- Metallics
- Pastels & Neons

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

The Sass version uses a custom function, so it requires **Sass 3.1.0+**.

*****

### Stylus Usage

The function name and parameters are identical to the Sass version.

```styl
@import "_pantone.styl"

.my-class
  color pantone( "519-u" )
```

*****

### LESS Usage

Because LESS lacks custom functions and looping inside them, the colors are implemented in variables. Use the naming convention `@pantone-**[color-name]**` to access them.

```less
@import "_pantone.less";

.my-class {
  color: @pantone-519-u;
}
```

The LESS version is intended for **pre**-processing - the library of color variables is 82k, so it's not intended to be included in the codebase your users are required to download. Don't be evil, pre-process your LESS stylesheets! :smile:

*****

### Just the colors, please!

All the colors are available in both JSON and CSV formats - and both stay up-to-date as new colors are added to the library. I also promise to never change these filenames or locations, so you could even call them directly on a regular basis to update your color lists if you need to.

*****

### Contributing

To contribute, you'll need [nodejs](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed. Fork and clone the repo, then visit the directory in the terminal and type `npm install` to install the dependencies. After that, simply run the `grunt` command to watch the files in the project. By default, it watches the JSON files for changes - then generates updated versions of the color library for Sass, LESS and Stylus. One could say we're pre-processing our pre-processor code, hah - woah... meta..

It also simultaneously generates a CSV file for each of the JSON files, so we can provide updated CSVs in the repo to anyone that needs them.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
