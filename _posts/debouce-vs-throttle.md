# Debounce vs Throttle

## Debounce

防抖

- [lodash.debounce](https://github.com/lodash/lodash/blob/master/debounce.js)

## Throttle

节流

- [throttleit](https://github.com/component/throttle/blob/master/index.js)
- [throttle-debounce](https://github.com/niksy/throttle-debounce/blob/master/throttle.js)
- [underscore.throttle](https://github.com/jashkenas/underscore/blob/master/underscore.js#L853-L892)
- [lodash.throttle](https://github.com/lodash/lodash/blob/master/throttle.js)

```JavaScript
function throttle (func, wait) {
  var ctx, args, rtn, timeoutID; // caching
  var last = 0;

  return function throttled () {
    ctx = this;
    args = arguments;
    var delta = new Date() - last;
    if (!timeoutID)
      if (delta >= wait) call();
      else timeoutID = setTimeout(call, wait - delta);
    return rtn;
  };

  function call () {
    timeoutID = 0;
    last = +new Date();
    rtn = func.apply(ctx, args);
    ctx = null;
    args = null;
  }
}
```
