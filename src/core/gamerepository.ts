import Point from "./point"

export default class Gamerepository{
    private listMemory: number[][] = new Array();
    constructor(){}

    public insert(point: Point): void{
        this.listMemory.push(point.getCoordinates());
    }

    public remove(): void{
        this.listMemory.pop();
    }

    public getAll(): number[][]{
        return this.listMemory;
    }

}