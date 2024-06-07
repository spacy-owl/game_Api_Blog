export function CommaFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function CommaRemove(x) {
    return x.replace(/,/g, "");
}