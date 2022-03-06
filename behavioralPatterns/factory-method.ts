abstract class Creator {
  public abstract factoryMethod(): Product;
  public someOperation(): string {
    const product = this.factoryMethod();
    return `${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}


class ConcreteProduct1 implements Product {
  public operation(): string {
    return 'ConcreteProduct1 operation 실행';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return 'ConcreteProduct2 operation 실행';
  }
}

interface Product {
  operation(): string
}

function clientCode(creator: Creator) {
  // ...
  console.log('클라이언트는 creator의 클래스를 모릅니다.');
  console.log(creator.someOperation());
  // ...
}

console.log('ConcreteCreator.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('ConcreteCreator2.');
clientCode(new ConcreteCreator2());
