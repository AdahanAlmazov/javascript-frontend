let str ="*"
while (str.length <=7){
    console.log(str + "\n")
    str+='*'
}

for (let i = 0; i < 101; i++){
    if (i % 3 ===0 && i % 5===0){
        console.log('fizzBuzz')
    }else if (i % 3 ===0){
        console.log('Fizz')
    }else if (i % 5 ===0){
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}

//3
function CountChar(word,letter){
    let result = 0
    for(let l of word){
        if(l===letter){
            result++
        }
    }
    console.log(result)
}

CountChar('Hello world','o')

//4
function CapitalizeString(word){
    let s = word.slice(1).toLowerCase()
    let first =  word[0].toUpperCase()
    console.log(first+s)
}
CapitalizeString('КиСеЛеВ')