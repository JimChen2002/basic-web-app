export default function QueryProcessor(query: string): string {
    if (query.includes("power")) {
        var pattern = /\d+/g;
        var numbers = query.match(pattern);
        if(numbers==null) numbers = ["1","2"];
        return (Math.floor(Number(numbers[0])/Number(numbers[1]))).toString();
    }
    function is_prime(x:number):boolean{
        for (let i=2;i<=Math.floor(Math.sqrt(x))+2;i++){
            if(x%i==0) return false;
        }
        return true;
    }
    if (query.includes("Which of the following numbers are primes")) {
        var pattern = /\d+/g;
        var numbers = query.match(pattern);
        if(numbers==null) numbers = ["1","2","3"];
        var len = numbers.length;
        var res = [] as string[];
        for (let i=0;i<len;i++){
            if(is_prime(Number(numbers[i]))){
                res.push(numbers[i].toString());
            }
        }
        return res.join(" ");
    }
    if (query.includes("minus")) {
        var pattern = /\d+/g;
        var numbers = query.match(pattern);
        if(numbers==null) numbers = ["1","2"];
        return (Number(numbers[0])-Number(numbers[1])).toString();
    }
    if (query.includes("divided")) {
        var pattern = /\d+/g;
        var numbers = query.match(pattern);
        if(numbers==null) numbers = ["1","2"];
        return (Math.floor(Number(numbers[0])/Number(numbers[1]))).toString();
    }
    if (query.includes("multiplied")) {
        var pattern = /\d+/g;
        var numbers = query.match(pattern);
        if(numbers==null) numbers = ["1","2"];
        return (Number(numbers[0])*Number(numbers[1])).toString();
    }
    function is_square(x:number):boolean{
        return x>0 && Math.sqrt(x) % 1 == 0;
    }
    function is_cube(x:number):boolean{
        return x>0 && Math.cbrt(x) % 1 == 0;
    }
    if (query.includes("Which of the following numbers is both a square and a cube")) {
        var pattern = /\d+/g;
        var numbers = query.match(pattern);
        if(numbers==null) numbers = ["1","2","3"];
        var len = numbers.length;
        for (let i=0;i<len;i++){
            if(is_square(Number(numbers[i]))&&is_cube(Number(numbers[i]))){
                return numbers[i].toString();
            }
        }
        return "None";
    }
    if (query.includes("Which of the following numbers is the largest")) {
        var pattern = /\d+/g;
        var numbers = query.match(pattern);
        if(numbers==null) numbers = ["1","2","3"];
        return (Math.max(Number(numbers[0]),Number(numbers[1]),Number(numbers[2]))).toString();
    }
    if (query.includes("plus")) {
        var pattern = /\d+/g;
        var numbers = query.match(pattern);
        if(numbers==null) numbers = ["1","2","3"];
        var len = numbers.length;
        var res1 = 0;
        for (let i=0;i<len;i++){
            res1 += (Number(numbers[i]));
        }
        return res1.toString();
    }
    if (query === "What is your name?") {
        return "Great";
    }
    if (query.toLowerCase().includes("shakespeare")) {
    return (
        "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
        "English poet, playwright, and actor, widely regarded as the greatest " +
        "writer in the English language and the world's pre-eminent dramatist."
    );
    }

  return "";
}
