function solution(s) {
    let temp = '';
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (isNaN(Number(s[i]))) temp += s[i];
        if (!isNaN(Number(s[i]))) result+= s[i];
        switch (temp) {
            case 'one':
                result += '1';
                temp = '';
                break;
            case 'two':
                result += '2';
                temp = '';
                break;
            case 'three':
                result += '3';
                temp = '';
                break;
            case 'four':
                result += '4';
                temp = '';
                break;
            case 'five':
                result += '5';
                temp = '';
                break;
            case 'six':
                result += '6';
                temp = '';
                break;
            case 'seven':
                result += '7';
                temp = '';
                break;
            case 'eight':
                result += '8';
                temp = '';
                break;
            case 'nine':
                result += '9';
                temp = '';
                break;
        }
    }
    return Number(result);
}