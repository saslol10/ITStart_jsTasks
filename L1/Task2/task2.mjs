export function task_2(a, b, sign) {
    if (sign === "+") {
        return (sum(a, b));
    }

    if (sign === "*") {
        return (mul(a, b));
    }

    if (sign === "-") {
        return (minus(a, b));
    }

    if (sign === "/") {
        if (b !== 0) {
            return (div(a, b));
        }
        console.log("b = 0, can't be divided")
    }

    function sum(a, b) {
        return Number(a) + Number(b);
    }

    function mul(a, b) {
        return Number(a) * Number(b);
    }

    function minus(a, b) {
        return Number(a) - Number(b);
    }

    function div(a, b) {
        return Number(a) / Number(b);
    }
}



