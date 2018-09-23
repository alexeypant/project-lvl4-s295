import uuid from 'uuid-js';
import ApplicationEntity from './ApplicationEntity';

export default class Message extends ApplicationEntity {
  static constraints = {
    text: {
      presence: true,
    },
    channel: {
      presence: true,
    },
    user: {
      presence: true,
    },
  };

  constructor(channel, user, text) {
    super();
    this.id = uuid.create().hex;
    this.channel = channel;
    this.user = user;
    this.text = text;
    this.createdAt = new Date();
  }
}
