function solution(a, b){         
    let answer=[];
    for(let i=0; i<a.length;i++){
        // A WIN --> PUSH A
        if(a[i]===1 && b[i]===3) answer.push('A');
        if(a[i]===2 && b[i]===1) answer.push('A');
        if(a[i]===3 && b[i]===2) answer.push('A');
        if(b[i]===1 && a[i]===3) answer.push('B');
        if(b[i]===2 && a[i]===1) answer.push('B');
        if(b[i]===3 && a[i]===2) answer.push('B');
        if(a[i]===b[i]) answer.push('D');
    }
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
