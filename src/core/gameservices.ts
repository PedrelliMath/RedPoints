import Gamerepository from "./gamerepository"
import Point from "./point";

export default class Gameservices{
    private gamerepository: Gamerepository;
    constructor(gamerepository: Gamerepository){
        this.gamerepository = gamerepository;
    }

    public insertPoint(point: Point){
        this.gamerepository.insert(point);
    }

    public removePoint(){
        this.gamerepository.remove();
    }

    public getPoints(): number[][]{
        return this.gamerepository.getAll();
    }
}