
/**
 * interval
 */

module.exports = Interval

/**
 * Attach decorated function as property
 * of the function itself.
 *
 * @param {fn} fn
 * @return {fn}
 */

function Interval (fn) {
  fn.interval = Interval.decorate(fn)
  return fn.interval
}

/**
 * Decorate function to run
 * in intervals
 *
 * @param {fn} fn 
 * @return {fn}
 */

Interval.decorate = function (fn) {
  function interval (ms, a,b,c,d,e,f,g) {
    var iv = setInterval(fn, ms, a,b,c,d,e,f,g)
    return iv
  }
  return interval
}
