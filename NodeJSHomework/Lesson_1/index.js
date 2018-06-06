function pause(func, num) {
  return function(...arguments) {
    setInterval(func(...arguments), num * 1000);
    console.log(`function ${func.prototype.name}: DELAY = ${num}`);
//    return func.apply(context, arguments);
  };
}
