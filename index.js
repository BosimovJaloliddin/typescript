"use strict";
// let str:string="Hellow"
// str.toUpperCase
// let big:bigint = 77n
// let title:null = null
// title = undefined
// let title:symbol = Symbol("hi")
// title = Symbol()
// let title:boolean = true
// title = false
// let obj: {age: number} = {age:12}
// obj.age = 32
// let arr: number[] = [1,2,3]
// function f(name:string, age:number):string{
//     return name
// }
// f("Hellow", 32).toUpperCase()
// let num: string | number="1234"
// console.log(Number(num).toFixed());
// let language: "uzb" | "rus" | "eng" = "uzb"
// const data: {id?: number, value: "uzb" | "rus" | "eng" }[] = [
//     {value: "uzb"},
//     {id:2, value: "eng"},
//     {id:3, value: "rus"},
// ]
// data.map((lang) => {
//     language = lang.value
// })
// const data: {id?: number, value?: string}[] = [
//     {value: "uzb"},
//     {id:2, value: "eng"},
//     {id:3},
// ]
// let nameing = 211;
// function f(): string {
//   return "hello";
// }
// type Fun = (title?: string, age?: number) => void;
// let color: "oq" | "qora" | "qizil" = "oq";
// type Color = "oq" | "qora" | "qizil";
// interface Prop {
//   id?: number;
//   value: Color;
// }
// type DataProp = Prop[];
// let data: DataProp = [
//   { value: "oq" },
//   { id: 2, value: "qora" },
//   { id: 3, value: "qizil" },
// ];
// data.map((col) => (color = col.value));
// let color: "oq" | "qora" | "qizil" = "oq";
// type Ty = { name: string };
// interface In {
//   name: string;
// }
// interface In {
//   age: number;
// }
// interface DataOne {
//   id: number;
//   name: string;
// }
// interface DataTwo extends DataOne {
//   age: number;
// }
// interface DataThere extends DataOne {
//   age: number;
//   title: string;
// }
// const objOne: DataOne = {
//   id: 1,
//   name: "Ali",
// };
// const objTwo: DataTwo = {
//   id: 1,
//   name: "Ali",
//   age: 32,
// };
// const objThere: DataThere = {
//   id: 1,
//   name: "Ali",
//   age: 42,
//   title: "Hellow",
// };
// interface Ar {
//   id?: number;
//   name: string;
//   age: number;
// }
// type ArrayType = Ar[];
// let arr: ArrayType = [
//   { name: "Ali", age: 12 },
//   { id: 2, name: "Ali", age: 12 },
//   { id: 3, name: "Ali", age: 12 },
// ];
// let tupAr: [number, string, boolean] = [1, "Hi", true];
// tupAr.reverse();
// console.log(tupAr);
// let arr: [number, string?, boolean?] = [12];
// enum En {
//   one,
//   two = 4,
//   there,
// }
// console.log(En);
// enum En {
//   nodir = 100,
//   jalol = "hi",
//   eldor = "10",
// }
// console.log(En.eldor);
// enum NewEn {
//   two = "uzb",
//   one = 1,
//   there,
// }
// const enum En {
//   uzb = "uzbek",
//   eng = "10",
//   rus = uzb,
// }
// console.log(En.eng);
// function fun(prop: unknown) {
//   if (typeof prop === "string") return prop.length;
// }
// console.log(fun("hellow"));
// function fun(): never {
//   throw Error("Error");
// }
// =======================================
// interface T extends TT, TA {
//   readonly name: string;
//   jobs?: number | string[];
// }
// type TT = {
//   id: number;
// };
// type TA = {
//   age: number | string;
// };
// let obj2: T = {
//   id: 2,
//   name: "furqat",
//   age: 23,
// };
// let obj1: T = {
//   id: 1,
//   name: "Ali",
//   age: 30,
//   jobs: [],
// };
// let obj1: { readonly name: string } = { name: "Ali" };
// let obj2: { name: string } = obj1;
// obj2.name = "Nodir";
// console.log(obj1.name);
// interface Prop {
//   name: string;
// }
// function fun({ name }: Prop) {
//   console.log(name);
// }
// fun({ name: "Ali" });
// ====================================
// interface Sign {
//   [index: string]: string | number | [] | {};
//   id: number;
//   title: {};
// }
// let obj1: Sign = {
//   title: {},
//   id: 1,
//   name: "Nodir",
//   age: 23,
//   status: "teacher",
//   familyNames: [],
// };
// let obj2: Sign = {
//   title: {},
//   id: 2,
//   name: "Uchtepa",
//   location: "Tashkent",
//   country: "Uzbekistan",
// };
// interface Sign {
//   name: string;
//   age: number;
//   status: string;
// }
// let obj: Sign = {
//   name: "Ali",
//   age: 23,
//   status: "Student",
// };
// const getData = (i: keyof Sign) => {
//   return obj[i];
// };
// getData("name");
// interface PropCar {
//   name: string;
//   speed: string;
//   age: number;
// }
// let obj = {
//   name: "nexia",
//   speed: "200",
//   age: 2017,
// };
// const getData = (key: keyof typeof obj) => {
//   return obj[key];
// };
// console.log(getData("name"));
// interface T extends Id, Staus {
//   name: string;
// }
// type Id = {
//   id: number;
// };
// type Staus = {
//   status: object;
// };
// let obj: T = {
//   id: 1,
//   name: "Ali",
//   status: {},
// };
// interface Prop {
//   readonly name: string;
//   age: number;
//   status: string;
// }
// let obj1: Prop = {
//   name: "Ali",
//   age: 23,
//   status: "student",
// };
// let obj2: { name: string } = obj1;
// obj2.name = "New Name";
// console.log(obj1.name);
// ======================================
// function fun(a: number, b: number): void {
//   console.log(a * b);
// }
// fun(2, 1);
// function fun(a: number, ...rest: number[]) {
//   console.log(a, ...rest);
// }
// console.log(fun(1, 2, 4, 5, 6, 7, 8));
// interface Rest {
//   num: string;
//   sum: number[];
// }
// function fun(a: string, ...rest: number[]): Rest {
//   return { num: a, sum: rest };
// }
// fun("1", 2, 2, 3);
// type Prop = {
//   new (): void;
// };
// function fun(prop: Prop) {
//   // prop();
// }
// fun(Date);
// function fun(a: string): number;
// function fun(a: number, b: number): number;
// function fun(a: number, b: number, c: boolean): number;
// function fun(a: number, b: number, c: number, d: number): number;
// function fun(a: any, b?: any, c?: any, d?: any): any {
//   return 1;
// }
// fun("1");
// fun(1, 2);
// fun(1, 2, true);
// fun(2, 3, 10, 2);
// function fun(a: number): void;
// function fun(a: string): void;
// function fun(a: number | string): void {
//   console.log(a);
// }
// let str = "Hellow";
// fun(str.length > 2 ? 1 : "hi");
// fun(1);
// fun("hi");
// const getData = (data: unknown) => {
//   if (typeof data === "string") console.log(data.length);
//   if (Array.isArray(data)) console.log(data);
// };
// getData("aq");
// getData([]);
// let obj: unknown = {};
// if (typeof obj === "string")
//   for (let i of obj) {
//   }
// const getType = function (a: unknown, b: number, c: string) {
//   if (a === c) {
//     a.toUpperCase;
//   } else if (a === b) {
//     a.toFixed();
//   }
// };
// let data: unknown;
// if (data instanceof Date) {
//   console.log(data.getHours());
// }
// function fun(a: unknown, b: number, c: string) {
//   if (typeof a === "string") a.repeat(b);
// }
// function getData(a: unknown) {
//   (a as string).length; // Agar a string ko'rinishida kelsa leng ishlasin
// }
// interface Prop {
//   name: string;
//   age?: number;
//   num: number;
//   status: "active" | "inactive";
// }
// let obj: Prop = {
//   name: "Ali",
//   age: 12,
//   num: 32,
//   status: "active",
// };
// let sum = obj.num * obj.age!;
// =============================
// type TypeObj = {
//   [a: string]: string | number | undefined;
//   name: string;
//   age: number;
//   status: string;
//   title?: string;
// };
// let obj = {
//   name: "ali",
//   age: 12,
//   status: "student",
// };
// const getValueObj = function (obj: TypeObj, key: string) {
//   console.log(obj[key]);
// };
// getValueObj(obj, "name");
// type TypeFun = (x: string) => string | number;
// function fun(x: number): number {
//   return x;
// }
// // type InputType = ReturnType<TypeFun>;
// type InputType = ReturnType<typeof fun>;
// let title: InputType = 123;
// /// <reference path="data.ts"/>
// console.log(car);
// let userName: unknown = { name: "Ali" };
// console.log((userName as { name: string }).name);
// let data: unknown = 12345;
// let num: number = <number>data;
// let arr: Array<number> = [1, 23];
// let prom: Promise<number>;
// ===================================
// function generic<T>(prop: T): T {
//   return prop;
// }
// generic<string>("Hellow");
// generic<number>(12);
// ===========================
// function generic<T, T2>(prop: T, age: T2) {
//   console.log(prop, age);
// }
// generic<string, number>("Hellow", 12);
// function Generic<T extends { id: number; name: string }>(data: T) {
//   console.log(data.id);
//   console.log(data.name);
// }
// interface UserT {
//   id: number;
//   name: string;
//   status: string;
// }
// Generic<UserT>({
//   id: 1,
//   name: "Shokir",
//   status: "student",
// });
