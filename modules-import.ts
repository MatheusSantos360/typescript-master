import { add, createUser, subtract, User } from './modules-export';

add(1, 2);
subtract(10, 1);

//

const user: User = {
  name: 'Cody',
  age: 17,
  createdAt: new Date(),
};

createUser('Cody', 17);
