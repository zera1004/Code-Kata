function solution(n) {
    let result = 0;
    for ( let i = n; i > 0; i--) {
        if (i%2 == 0){
            result += i;
        }
    }
    return result;
}

// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.