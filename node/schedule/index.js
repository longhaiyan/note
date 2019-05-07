const schedule = require('node-schedule');

const schedule = () => {
  const rule = new schedule.RecurrenceRule();
  // 每分钟的第 1, 11, 21, 31, 41, 51 秒执行一次操作
  rule.second = [1, 11, 21, 31, 41, 51];

  schedule.scheduleJob(rule, () => {
    console.log('schedule:' + new Date());
  });
}

schedule();