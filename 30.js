function solution(s) {
    let result = '';
    if (s.length % 2 === 1) {
        result += s[s.length/2-0.5];
    } else {
        result = s[s.length/2-1] + s[s.length/2];
    }
    return result;
}

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.