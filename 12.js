function solution(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    result /= arr.length;
    return result;
}

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.