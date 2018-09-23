import uuid from 'uuid-js';
import ApplicationEntity from './ApplicationEntity';

export default class User extends ApplicationEntity {
  static constraints = {
    name: {
      presence: true,
    },
  };

  constructor(name) {
    super();
    this.id = uuid.create().hex;
    this.name = name;
    this.createdAt = new Date();
  }
}
