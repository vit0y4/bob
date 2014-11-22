var Bob = function() {
  Bob.prototype.hey = function(input) {
    if (input.length === 0 || /^\s*$/.test(input)) { 
    	return 'Fine. Be that way!'; 
    }
    if (input.toUpperCase() === input && /[A-Z]/.test(input)) { 
    	return 'Whoa, chill out!'; 
    }
    if (input.charAt(input.length - 1) === '?') { 
    	return 'Sure.'; 
    }
    return 'Whatever.';
   }
};
module.exports = Bob;