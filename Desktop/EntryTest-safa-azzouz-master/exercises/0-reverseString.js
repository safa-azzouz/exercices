'use strict'
/* # Exercice: Reverse String
 *
 * ## Explanation:
 * You must code a function that reverses a string.
 *
 * ## Example:
 *```
 *reverseString('my-string') === 'gnirts-ym'
 *```
 *
 * ## Expected Time
 * You should spend around 3 minutes on this exercice
 *
 * ## Further Notice
 * You have more examples in <root>/validations/0-reverseString.validation.js
 */

function reverseString(str) {
  // Do your code here
  if (str==="" ) {
    return ("")
  } else {
  var msg=str.split("");
  var reverse=msg.reverse();
  var result=reverse.join("");
  return result;
  
}}

module.exports = reverseString
