//Lesson 2
// let str: string = "Hellow"
// str = "Bro"
// let num: number = 12345
// num = str.length
// num = 432432
// let dataAny: any = "Hellow"
// dataAny = 13123
// dataAny = true
// let noType = "Hellow"
// noType = "Hi"
// let numNoType = 13213
// numNoType = 12321
// let boolNoType = false
// boolNoType = true
// let data: any = []
// let dataAr: any[] = []
// data.push(13123,"fafas",true)
// dataAr.push(13123,"fafas",true)
// console.log(data);
// console.log(dataAr);
// let anyStr: string[] = []
// anyStr.push("hi","hellow")
// let anyNum: number[] = []
// anyNum.push(1, 2, 3)
// let anyBoole: boolean[] = []
// anyBoole.push(true, false)
// console.log(anyStr);
// console.log(anyNum);
// console.log(anyBoole);
// let dataAr: [string, number] = ["hellow", 2132]
// dataAr = ["Hi", 4444]
// console.log(dataAr);
// let dataAr: [] = []
// dataAr = []
// let union1: number | string = "hellow"
// let union2: number | string = 12345
// let union3: number | string | boolean = true
// let union4: number | string | boolean = 12345
// console.log(union1);
// console.log(union2);
// console.log(union3);
// console.log(union4);
// let union: [string | number] = [3]
// let unionAny: any[string | number] = ["hi", "hellow", 21321,"No"]
// let tuple: [number, string][];
// tuple = [[12, "hi"], [13, "hellow"], [14, "One"]]
// console.log(tuple);
// enum dir {
//     up,
//     down,
//     top = 30,
//     bot,
// }
// console.log(dir.up, dir.down, dir.top, dir.bot);
// enum dir {
//     up = "one",
//     down = "two",
//     top = "there",
//     bot = "five",
// }
// console.log(dir.up, dir.down, dir.top, dir.bot);
// let id: any = 1231
// let uId = <string>id
// let uIds = id as boolean
// id = "dcs"
// id = 321231
// uId = "bahj"
// uIds = true
// console.log(id);
// console.log(uId);
// console.log(uIds);
////////////////////////////////////////////////////////////////////////
// Lesson 3
// function getData(): Function {
//     return (): string => "Hellow"
// }
// console.log(getData()());
// function getData(a:number, b:number): number {
//     return a*b
// }
// console.log(getData(4, 4));
// function getData(): number | undefined {
//     return undefined
// }
// console.log(getData());
// function getData(): number | void {
// }
// console.log(getData());
// type callProp = number
// function getData(key:number): callProp {
//     return key
// }
// console.log(getData(333))
// type callProp = {
//     name:string
// }
// function getData(key: string): callProp {
//     return {name: key}
// }
// console.log(getData("Ali"))
// type callProp = {
//     (a:number) : number
// }
// function getData(): callProp {
//     return (a:number) => a 
// }
// console.log(getData()(12))
// type callProp = {
//     (a:number) : number
// }
// type param = {
//     name: string,
//     age?: number,
// }
// function getData(prop: param): callProp {
//     return (a:number) => a 
// }
// getData({name:"Ali"})
// type callProp = {
//     new (a:number): Object
// }
// function getData(fn: callProp): Object{
//     return new fn(1)
// }
// function ConsFunc(a:number){
//     return Date
// }
// getData(ConsFunc(1))
// type callProp = {
//     new (): Object;
// }
// function getData(fn: callProp): string{
//     return new fn().toString()
// }
// function ConsFunc (){
//     return Date
// }
// getData(ConsFunc())
// function test(ar: string[]) {
//     return (value: string) => {
//         ar.push(value)
//         console.log(ar); 
//     }
// }
// let arrBaz = test([])
// arrBaz("frontend")
// arrBaz("backend")
// function getData<Type>(ar: Type[]){
//     return (value:Type) => {
//         ar.push(value)
//         console.log(ar);
//     }
// }
// let strArr = getData<string>([])
// let numArr = getData<number>([])
// strArr("frontend")
// strArr("backend")
// numArr(111)
// numArr(222)
// function getData <Type> (ar: Type[]){
//     return (value: Type) => {
//         ar.push(value)
//         return ar
//     }
// }
// let strArray = getData<string>([])
// console.log(strArray("frontend"));
// function getData <Type, Output> (ar: Type[]){
//     return (value: Type): Output | string => {
//         ar.push(value)
//         return "hi"
//     }
// }
// let strArray = getData<string, number>([])
// function getData<Type extends {length:number}>(value: Type){
//     return value.length
// }
// getData<string>("frontend")
// getData<number[]>([1234])
// function getData(a: string): string;
// function getData(a: string, b: string): string;
// function getData(a: string, b?:string, c?:string): string{
//     return "hi"
// }
// getData("hellow");
// getData("hi", "hellow");
// getData("frontend", "backend", "io");
