abstract class CreditBase {
    constructor() {

    }

    save(): void {
        console.log("Saved!");
    }

    abstract calculate(): void;

}

class ConsumerCredit extends CreditBase {

    constructor() {
        super();
    }

    calculate(): void {
        console.log("Consumer Credit calculated");
    }
}

class MortgageCredit extends CreditBase {

    constructor() {
        super();
    }

    calculate(): void {
        console.log("Mortgage Credit calculated");
    }
}

let consumerCredit = new ConsumerCredit();
consumerCredit.calculate();
consumerCredit.save();

let mortgageCredit = new MortgageCredit();
mortgageCredit.calculate();
mortgageCredit.save();

let credit: CreditBase = new ConsumerCredit();
credit.calculate();