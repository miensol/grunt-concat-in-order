# grunt-concat-in-order

> Concatenates files respecting dependencies.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-concat-in-order --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-concat-in-order');
```

## The "concat_in_order" task

### Overview
In your project's Gruntfile, add a section named `concat_in_order` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  concat_in_order: {
    your_target: {
      options: {
          /*
          this is a default function that extracts required dependencies/module names from file content
          (getMatches - function that pick groups from given regexp)
          extractRequired: function (filepath, filecontent) {
              return this.getMatches(/require\(([^\)]+)\)/g, filecontent);
          },
          this is a default function that extracts declared modules names from file content
          extractDeclared: function (filepath, filecontent) {
              return this.getMatches(/declare\(([^\)]+)\)/g, filecontent);
          }
          */
      },
      files: {
        'build/concatenated.js': ['lib/**/*.js']
      }
    }
  }
})
```
<!---
### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  concat_in_order: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  concat_in_order: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```
-->
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
