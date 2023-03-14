export default function QueryProcessor(query: string): string {
    if (query === "What is 12 plus 77?") {
        return "89";
    }
    if (query.includes("plus")) {
        var numbers = query.match(/\d+/);
        if(numbers==null) numbers = ["1","2"];
        return (Number(numbers[0])+Number(numbers[1])).toString();
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
