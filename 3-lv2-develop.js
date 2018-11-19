// 기능개발
// 뒤에 있는 기능은 먼저 완성되었어도, 앞의 기능이 완성되어 배포될 때 함께 배포
function solution(progresses, speeds) {
    var compl = 100;
    var reqDay;
    var reqDays = [];
    var answer = [];
    for (var i = 0; i < progresses.length; i++) {
        var _reqProcess = (compl - progresses[i]);
        if (_reqProcess % speeds[i] === 0) reqDay = _reqProcess / speeds[i]; 
        else reqDay = parseInt(_reqProcess / speeds[i]) + 1;
        reqDays.push(reqDay);
    }
    var numWorks = 1;
    reqDays.reduce(function(a,item){
        if (a >= item) numWorks += 1;
        else {
            answer.push(numWorks);
            a = item;
            numWorks = 1;
        }
        return a;
    })
    answer.push(numWorks);
    return answer;
}


// 테스트 케이스
var testProcesses = [
    [93,30,55]
];
var testSpeeds = [
    [1,30,5]
];
var testAnswer = [
    [2,1]
];
for (var k=0;k<testProcesses.length;k++){
    var result = solution(testProcesses[k], testSpeeds[k])+'';
    var answer = testAnswer[k]+'';
    if (result === answer) {
        console.log(`${result} ?= ${answer}`);
        console.log(`testCase${k+1} 통과했습니다.`);
    }
    else {
        console.log(`testCase${k+1} 통과하지 못했습니다.`);
    }
}