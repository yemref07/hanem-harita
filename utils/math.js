export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function getAverage(param) {

    let total = param.reduce((accumulator, item) => {
        return accumulator += item;
    }, 0)

    return total / param.length;
}

export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Network Error`);
        }
        return data;

    } 
    catch (error) {
        console.error("Error is:", error);
        throw new Error(`Network Error`);
    }

}