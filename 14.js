function solution(n) {
    
    result = 0;
    for (let i = 1; i < n+1; i++) {
        if (n%i == 0) {
            result +=i;
        }
    }
    return result;
}

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.