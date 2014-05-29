# Pantoner

A comprehensive Pantone color library implemented in Sass, LESS, Stylus, JSON, CSV, YAML, and XML. Contains a total of 3,193 colors including the following sets:

- Coated (`-c`)
- Uncoated (`-u`)
- Metallics
- Pastels & Neons

#### [Demo & Color Reference](http://jpederson.github.io/Pantoner)



## For CSS Preprocessors

There are currently implementations for Sass, LESS and Stylus. Here are some examples, but there are also example files in each of the preprocessor folders as well.


#### Sass

All you'll need for this is `scss/_pantone.scss` and Sass 3.1.0+ (since we're using a custom function).

```scss
@import "pantone";

.my-class {
	color: pantone( "519-u" );
	background-color: pantone( "warm-grey-1-c" );
}
```


#### Stylus

The function name and parameters are identical to the Sass version, so it's just the syntax differences.

```styl
@import "_pantone.styl"

.my-class
  color pantone( "519-u" )
```


#### LESS

You'll need `less/_pantone.less`. The LESS version is implemented in variables. Use the naming convention `@pantone-[color-name]` to access them - like so:

```less
@import "_pantone.less";

.my-class {
  color: @pantone-519-u;
}
```

**Important:** The LESS version is intended for **pre**-processing - the library of color variables is 82k, so it's not intended to be included in the codebase your users are required to download. Don't be evil, pre-process your LESS stylesheets! :smile:



## Data Formats

All the colors are available in the following formats (all are auto-updated when colors are added): 

- JSON
- CSV
- YAML
- XML

I promise to never change these filenames or paths, so you could even call them directly on a regular basis to update your color lists as needed.



## Contributing

To contribute, you'll need [nodejs](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed. Fork and clone the repo, then visit the directory in the terminal and type `npm install` to install the dependencies. After that, simply run the `grunt` command to watch the files in the project. 

### Editing Colors

While grunt is active, it watches the JSON files for changes - then generates updated versions of the color library for Sass, LESS and Stylus. It also simultaneously generates CSV, YAML, and XML files for each of the color sets so the data is available in multiple formats. Since the library uses JSON as the source, you should **only edit the files in the `json` and `dev` folders** - any changes in generated files are very likely to be overwritten the next time a change is made to the JSON.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
