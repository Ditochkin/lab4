import {MiniMaple} from "../src/miniMaple";

test('only x', () => 
{
    const maple = new MiniMaple("x");

    expect(maple.differentiate("x")).toBe("1");
    expect(maple.differentiate("y")).toBe("");
});

test('x with coefficient', () => 
{
    const maple = new MiniMaple("2*x");

    expect(maple.differentiate("x")).toBe("2");
    expect(maple.differentiate("y")).toBe("");
});

test('x with degree', () => 
{
    const maple = new MiniMaple("x^3");

    expect(maple.differentiate("x")).toBe("3*x^2");
    expect(maple.differentiate("y")).toBe("");
});

test('x with coefficient and degree', () => 
{
    const maple = new MiniMaple("4*x^3");

    expect(maple.differentiate("x")).toBe("12*x^2");
    expect(maple.differentiate("y")).toBe("");
});

test('second degree polynomial', () => 
{
    const maple = new MiniMaple("3*x^2");

    expect(maple.differentiate("x")).toBe("6*x");
    expect(maple.differentiate("y")).toBe("");
});

test('coefficient with letters', () => 
{
    const maple = new MiniMaple("3*y*x^2");

    expect(maple.differentiate("x")).toBe("6*y*x");
});

test('polynomial with some members', () => 
{
    const maple = new MiniMaple("3*y*x^2+x+4*y+2*x^5");

    expect(maple.differentiate("x")).toBe("6*y*x+1+10*x^4");
});

test('big degree and coefficient', () => 
{
    const maple = new MiniMaple("123*x^328");

    expect(maple.differentiate("x")).toBe("40344*x^327");
});

test('plus and minus in the start of polynomial', () => 
{
    const maple = new MiniMaple("+2*x^4");

    expect(maple.differentiate("x")).toBe("8*x^3");

    const maple2 = new MiniMaple("-2*x^4");

    expect(maple2.differentiate("x")).toBe("-8*x^3");
});

test('wrong data', () => 
{
    const maple = new MiniMaple("2/3*x^4");

    expect(maple.differentiate("x")).toBe(undefined);
});