
interface ITask{
  run();
}

interface IDailyLogs2Local extends ITask{
  download(theday:moment.Moment);
  exist(theday:moment.Moment);
  getLogsDir(theday:moment.Moment);
}

declare module IDailyLogs2Local {
  export function getInstance();
}
