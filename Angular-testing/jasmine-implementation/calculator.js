function Calculator()
{
   this.total = 0;

}
//All JavaScript objects inherit properties and methods from a prototype
//The Object.prototype is on the top of the prototype inheritance chain:
//The JavaScript prototype property also allows you to add properties and new methods to objects constructors:
Calculator.prototype.add = function(number)
{
  return (this.total += number)
}
Calculator.prototype.substract = function(number)
{
  return (this.total -= number)
  
}
Calculator.prototype.multiply = function(number)
{
    return (this.total *= number)
}
Calculator.prototype.divide = function(number)
{

    if(number ===0)

    throw new Error("Number can not be zero");
    return (this.total /= number)
}

