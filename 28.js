function solution(numbers) {
    let num = [];
    let result = 0;

    for (let i = 0; i < 10; i++){
        num.push(i);
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (numbers[i] === num[j]) {
                num.splice(j, 1);
            }
        }
    }

    for (let i = 0; i <num.length; i++) {
        result += num[i];
    }

    return result;
}

// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.