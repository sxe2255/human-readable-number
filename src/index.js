module.exports = function toReadable (number) {    
    let string;
        let stringTwo;
        let regexp = /([0-9])([0-9]{0,2})/gm;
        let str = number.toString();
        let arr = str.split(regexp);
        let object = {
                "1" : "one",
                "2" : "two",
                "3" : "three",
                "4" : "four",
                "5" : "five",
                "6" : "six",
                "7" : "seven",
                "8" : "eight",
                "9" : "nine",
                "10" : "ten",
                "11" : "eleven",
                "12" : "twelve",
                "13" : "thirteen",
                "14" : "fourteen",
                "15" : "fifteen",
                "16" : "sixteen",
                "17" : "seventeen",
                "18" : "eighteen",
                "19" : "nineteen",
                "20" : "twenty",
                "30" : "thirty",
                "40" : "forty",
                "50" : "fifty",
                "60" : "sixty",
                "70" : "seventy",
                "80" : "eighty",
                "90" : "ninety",
                "100" : "hundred"}
        if(number == 0){
        return "zero";
        } else if (number>0 && number<=20){
            return object[number];
        }
        
        if(str.length == 2){
        let a = str.split("");
        if(a[1]!=0){
            return object[a[0]+"0"] + " " + object[a[1]]}
        else {return object[a[0]+"0"]}
        }
        if(str.length == 3){
            string = object[arr[1]] + " " + object[100];
            stringTwo =arr[2].split("");
            if(object[arr[2]]){
                string = string +" "+ object[arr[2]];    
                return string
                }    
            else if(stringTwo[1] !== "0"&& stringTwo[0] !== "0" ){ 
                string = string + " " + object[stringTwo[0]+"0"]+" "+object[stringTwo[1]];
                return string;
            }
            else if(stringTwo[0] == "0" && stringTwo[1] == "0"){
                return string
            }
            else if(stringTwo[0] == "0" && stringTwo[1] !== "0"){
            string = string +" "+object[stringTwo[1]]    
            return string
            }
            else if(stringTwo[0] !== "0" && stringTwo[1] == "0"){
            string = string +" "+ object[stringTwo[0]+"0"];    
            return string
            }
        }
}
