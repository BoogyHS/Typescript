abstract class Melon {
    constructor(public weigth: number, public melonSort: string) {

    }
}

class Watermelon extends Melon{
    constructor(public weight: number, public melonSort: string, public elementIndex: number){
        super(weight, melonSort);

    }
}