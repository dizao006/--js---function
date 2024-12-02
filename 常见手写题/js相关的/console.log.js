var myConsoleLog = function () {
  console.log.apply(console, arguments);
};

myConsoleLog("Hello", "World"); // 输出 "Hello World"
