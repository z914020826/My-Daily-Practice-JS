class Logger {
  constructor() {
    if (!Logger.instance) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }

  log(message) {
    this.logs.push({ message, timestamp: new Date() });
    console.log(`[${this.logs.length}] ${message}`);
  }

  printLogs() {
    this.logs.forEach((log, index) => {
      console.log(`[${index + 1}] ${log.message} - ${log.timestamp}`);
    });
  }
}

// 使用示例
const logger1 = new Logger();
logger1.log("Info: Application started");
logger1.log("Error: Something went wrong");

const logger2 = new Logger();
logger2.log("Debug: This is a debug message");

logger1.printLogs();
