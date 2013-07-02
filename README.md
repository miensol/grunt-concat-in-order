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

The `concat_in_order` task extracts declared required dependencies as well as provided modules/classes from your javascript (or any other text) files. Having this [dependency graph](http://en.wikipedia.org/wiki/Dependency_graph) the task will perform [topological sort](http://en.wikipedia.org/wiki/Topological_sorting) and concatenate file so that all modules will be put after their required dependencies.

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
### Sample
Let's say you have 4 files in a `lib` directory

- AUsingBaseBAndBaseA.js

```js
/*start AUsingBaseBAndBaseA*/
framwork.require('module.BaseB');
framwork.require('module.BaseA');
framework.declare('module.UsingBaseBAndBaseA');
var forth = function fourthFunction(){};
/*end AUsingBaseBAnddBaseA*/
```

- AUsingBaseA.js

```js
/*start AUsingBaseA*/
framwork.require('module.BaseA');
var second = function secondFunction(){};
/*end AUsingBaseA*/
```


- BaseA.js

```js
/*start BaseA*/
framework.declare('module.BaseA');
var first = function firstFunction(){};
/*end BaseA*/
```

- BaseBUsingBaseA.js

```js
/*start BaseBUsingBaseA*/
framwork.require('module.BaseA');
framework.declare('module.BaseBUsingBaseA');
framework.declare('module.BaseB');
var third = function thirdFunction(){};
/*end  BaseBUsingBaseA*/
```
Given the above configuration the task will produce `build/concatenated.js` file with following content:

```js
/*start BaseA*/
framework.declare('module.BaseA');
var first = function firstFunction(){};
/*end BaseA*/
/*start BaseBUsingBaseA*/
framwork.require('module.BaseA');
framework.declare('module.BaseBUsingBaseA');
framework.declare('module.BaseB');
var third = function thirdFunction(){};
/*end  BaseBUsingBaseA*/
/*start AUsingBaseA*/
framwork.require('module.BaseA');
var second = function secondFunction(){};
/*end AUsingBaseA*/
/*start AUsingBaseBAndBaseA*/
framwork.require('module.BaseB');
framwork.require('module.BaseA');
framework.declare('module.UsingBaseBAndBaseA');
var forth = function fourthFunction(){};
/*end AUsingBaseBAnddBaseA*/
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
