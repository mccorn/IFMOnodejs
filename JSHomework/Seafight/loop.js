function Loop() {
    this.elements = arguments[0] || [];
    this.inx = 0;
    this.length = this.elements.length;
    this.now = this.elements[this.inx];
}

Loop.prototype.next = function() {
    this.inx++;
    if (this.inx >= this.elements.length) this.inx = 0;
    return this.elements[this.inx];
}

Loop.prototype.push = function(element) {
    this.length++;
    return this.elements.push(element);
}

Loop.prototype.pop = function() {
    if  (this.inx === this.length - 1) this.now = this.elements[0];
    this.inx = 0;
    this.length--;
    return this.elements.pop();
}

Loop.prototype.shift = function() {
    if  (this.inx === 0) this.now = this.elements[this.inx + 1];
    this.inx++;
    this.length--;
    return this.elements.shift();
}

Loop.prototype.unshift = function(element) {
    this.length++;
    return this.elements.unshift(element);
}