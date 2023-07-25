type Items = {
    foo: string
}
const items: Items[] = [
    {foo: 'bar'},
    {foo: 'bar'},
]
function someFn (items?: Items[]) {
    return JSON.parse(
        JSON.stringify(items || []),
    );
}

const test = someFn(items)
console.log(test);
