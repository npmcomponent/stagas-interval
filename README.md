*This repository is a mirror of the [component](http://component.io) module [stagas/interval](http://github.com/stagas/interval). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/stagas-interval`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# interval

Function interval decorator

`component-install stagas/interval`

## Usage

```js
var Interval = require('interval')
Interval(fn)
var iv = fn.interval(1000)
```

or

```js
var Interval = require('interval')
var intervaled = Interval.decorate(fn)
var iv = intervaled(1000)
```

You may also pass additional arguments:

```js
fn.interval(1000, 'hello', ['world'])
```

## License

MIT
