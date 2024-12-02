Promise.prototype.myCatch = function (onRejected) {
  return this.then(null, onRejected);
};
