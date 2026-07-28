// Example 1
const apiVersion = (__version: string) => {
  return (target: any) => {
    Object.assign(target.prototype, { __version });
  };
};

@apiVersion('1.1.3')
class Api {
  __version?: string;

  get() {
    console.log('Hello');
  }
}

const api = new Api();
api.get();
console.log(api.__version);

// Example 2
const ObjectType = (__name: string) => {
  return (target: any) => {
    Object.assign(target.prototype, { __name });
  };
};

@ObjectType('user')
class User {
  __name?: string;

  sayHello() {
    console.log('Hello');
  }
}

const user = new User();
console.log(`type ${user.__name} {}`);

// Example 3 - Decorators Stage 3
function minLength(length: number) {
  return function (
    target: ClassAccessorDecoratorTarget<any, string>,
    context: ClassAccessorDecoratorContext,
  ) {
    return {
      get() {
        return target.get.call(this);
      },

      set(value: string) {
        if (value.length < length) {
          throw new Error(`Expect ${String(context.name)} to have at least ${length} characters`);
        }

        target.set.call(this, value);
      },
    };
  };
}

@ObjectType('post')
class Post {
  @minLength(3)
  accessor title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const post = new Post('Hello');

console.log(post.title);

// Erro
post.title = 'Hi';
