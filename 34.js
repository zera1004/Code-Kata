function solution(s) {
    let result = s.split('');
    let temp = '';
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i+1; j < result.length; j++) {
            if (result[j] > result[i]) {
                temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result.join('');
}

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// str은 길이 1 이상인 문자열입니다.