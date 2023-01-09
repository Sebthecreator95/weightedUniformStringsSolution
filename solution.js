function weightedUniformStrings(s, queries) {
    // Write your code here
    let alphabet = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26}
    let nums = []
    nums.push(alphabet[s[0]])
    let answer = []
    for(let i = 1; i < s.length; i++){
        if(s[i] === s[i-1]){
            nums.push((nums[i-1]+alphabet[s[i]]))
        }else{
            nums.push(alphabet[s[i]])
        }
    }
    for(let i = 0; i < queries.length; i++){
        if(nums.indexOf(queries[i]) === -1){
            answer.push("No")
        }else{
            answer.push("Yes")
        }
    }
    
    return answer

}
