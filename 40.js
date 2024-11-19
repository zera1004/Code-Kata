function solution(n) {
    let tmp = n.toString(3);
    let result = '';
    let result2 = 0;
    for (let i = 0; i < tmp.length; i++) {
        result += tmp[tmp.length-1-i];
    }
    for (let i = 0; i < result.length; i++) {
        result2 += Number(result[result.length-1-i])*3**i;
    }
    return result2;
}

// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.