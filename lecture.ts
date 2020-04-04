let num: number = 3;

let str: string = "3";

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

let arr3: [boolean, number] = [true, 2]; // length가 2인 배열. Tuple
// let arr4: [false, 3] = [true, 4]; // 더 엄격하게 값을 고정할 수도 있음.

let arr5 = [true, 1, '2'] as const; // 상수로 고정시킴. let 이여도 변경 할 수 없음. const로 처음부터 선언하면 해결될 일.
// as 를 이용해 형변환도 가능하다. ~~~ as unknown as number
// const obj = { 1: true } as const;
// obj.1 = 3; // 객체인경우에는 내부 property 수정 불가함.

const obj2: { 1: boolean } = { 1: true };




enum Color { Red, Green, Blue }
let c: Color = Color.Green; // Color.Red = 0, Color.0 = 'Red' 



function func1(a: number, b: number): number {
    return a + b;
}

function func2(a: number, b: number): void { // 리턴값이 없는경우 void 사용. 생략 가능.
    console.log(a, b);
}


// const arr6: [] = []; // 배열의 타입을 빈배열로 만든경우 never를 발견 가능.
// arr6.push(3);

const abcd: any = []; // any는 뭐든지 들어갈 수 있음. 타입을 정의할때 너무 복잡해서 못정할 경우에 사용.

const obj3: { a?: string } = {}; // a? => a자리에 값이 있을수도 없을수도 있음.


interface inter {
    A: 1
    B: "Hello"
    C: boolean
}

interface inter { // 같은 interface 이름을 쓰면 자동으로 합쳐진다. => 타인의 interface도 쉽게 수정 가능 하다.
    D: 4
}

interface inter2 extends inter {  // 인터페이스는 상속이 가능하다.
    E: string
};

const obj4: inter2 = {
    A: 1,
    B: "Hello",
    C: true,
    D: 4,
    E: "extends"
}

type Hello = string | number; // hello라는 타입을 추가. or 연산자와 주로 같이 쓰임.
// 타입이 인터페이스보다 더 넓은 범위에서 사용됨.

// function func3(): keyof inter2 {
//     return Object.keys(obj4) as ['A', 'B', 'C', 'D', 'E'];
// }

interface inter3 {
    a: 3,
    b: 7,
    [key: string]: number // 여기에 뭐가 들어올지 확신 할 수 없는 경우. 최대한 지양
}

const obj5: inter3 = {
    a: 3,
    b: 7,
    'c': 45
}


class cls1 {
    public hp: number; // 인스턴스 & 클래스 모두 접근 가능.
    protected mp: number; // 클래스 내부 & 상속받은 자식 클래스만 접근 가능. (자식은 ok, 부모는 no)
    private dmg: number // 인스턴스를 만들어도 접근 할 수가 없음. 클래스에서만 접근 가능.

    constructor() {
        this.hp = 30;
        this.mp = 100;
        this.dmg = 200;
    }
}



interface obj<T extends string | number> { // T라는 임의의 타입. T의 범위(타입)를 제한하기위해 extends 사용.
    add: (a: T, b: T) => T
}

const a: obj<number> = { // 사용할때 타입을 정한다.
    add: (a, b) => a + b
}

const b: obj<string> = {
    add: (a, b) => a + b
}

a.add(1, 2);
b.add('1', '2');



function makeGender(target: typeof Person) {
    return class extends target {
        gender = 'male';
    }
}

// 데코레이터는 아직 실험적인 기능이다. javascript 개념이다.
@makeGender
class Person {
    title: string;
    age = 27;

    constructor(title: string) {
        this.title = title;
    }

    setTitle(title: string) {

    }

    sayTitle(): any {
        return this.title;
    }
}