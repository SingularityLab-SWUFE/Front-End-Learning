//导入id模块
import { nanoid } from 'nanoid'
//导入时间模块
function sayHello(name) {
  let id = nanoid();
  let timeOBJ = getTimeOBJ();
  return `${timeOBJ.timeStr}好${name} ,你的用户id为${id}!现在是 ${timeOBJ.timeDate}`;
}

function getTimeOBJ() {
    let timeNow = new Date();
    //判断是早上下午还是晚上
    let hour = new Date().getHours();
    let timeStr;
    if (hour >= 6 && hour < 12) {
        timeStr = "早上"
    } else if (hour >= 12 && hour < 18) {
        timeStr = "下午"
    } else {
        timeStr = "晚上"
    }
    let timeDate = timeNow.toLocaleString();
    
    let timeOBJ = {
        timeStr: timeStr,
        timeDate: timeDate
    }
    return timeOBJ;
}

let result = sayHello('张三')
console.log(result)