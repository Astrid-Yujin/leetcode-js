/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
  const stack = []
  for(let c of s) {
    if(c === '(') stack.push(')')
    else if(c === '{') stack.push('}')
    else if(c === '[') stack.push(']')
    else if(stack.length === 0 || c !== stack.pop()) return false
  }
  return stack.length === 0
};


// another

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
  const stack = []
  const n = s.length
  for(let c of s) {
    if(c === '(' || c === '{' || c === '[') stack.push(c)
    else if(c === ')') {
      if(stack[stack.length - 1] === '(') stack.pop()
      else return false
    }
    else if(c === '}') {
      if(stack[stack.length - 1] === '{') stack.pop()
      else return false
    }
    else if(c === ']') {
      if(stack[stack.length - 1] === '[') stack.pop()
      else return false
    }
  }
  return stack.length === 0
};

// another

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];
  const oArr = [];
  let char = "";
  let cidx = 0;
  let oidx = 0;
  for (let i = 0; i < s.length; i++) {
    char = s.charAt(i);
    if (closeBrackets.indexOf(char) !== -1) {
      cidx = closeBrackets.indexOf(char);
      lastOpenBracket = oArr[oArr.length - 1];
      oidx = openBrackets.indexOf(lastOpenBracket);
      if (cidx === oidx) {
        oArr.pop();
      } else {
        return false;
      }
    } else {
      oArr.push(char);
    }
  }
  return oArr.length > 0 ? false : true;
};

// Another
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if(s.length % 2) return false;
  else if (s.length === 0) return true;
  
  const helper = [];
  let curChar;
  let lastChar;
  
  for (let i = 0; i < s.length; i++) {
    curChar = s.charAt(i);
    
    if (charIsLeft(curChar)) {
      helper.push(curChar);
    } else if (helper.length) {
      lastChar = helper.pop();
      
      if(!checkValidity(lastChar, curChar))
        return false;
    }
    else return false;
  }
  
  return (helper.length === 0);
  
  function charIsLeft(ch) {
    return (ch === '(' || ch === '{' || ch === '[');
  }
  
  function checkValidity(a, b) {
    return ((lastChar === '(' && curChar === ')') 
         || (lastChar === '{' && curChar === '}') 
         || (lastChar === '[' && curChar === ']') 
        );
  }
};