function solution(heights) {
    var answer = [];
    for(var i = heights.length-1;i>=0;i--){
        if(i === 0) answer.unshift(0);
        for(var j = i - 1;j >= 0;j--){
            if (heights[i] < heights[j]) {
                answer.unshift(j+1);
                break;
            } else if (j === 0) {
                answer.unshift(0);
            }
        }
    }
    return answer;
};

// 테스트 케이스
var testCase = [
    [6,9,5,7,4],
    [3,9,9,3,5,7,2],
    [1,5,3,6,7,6,5]
];
var testAnswer = [
    [0,0,2,2,4],
    [0,0,0,3,3,3,6],
    [0,0,2,0,0,5,6]
];
for (var k=0;k<testCase.length;k++){
    var result = solution(testCase[k])+'';
    var answer = testAnswer[k]+'';
    if (result === answer) {
        console.log(`${result} =? ${answer}`)
        console.log(`testCase${k+1} 통과했습니다.`)
    }
    else {
        console.log(`testCase${k+1} 통과하지 못했습니다.`)
    }
};