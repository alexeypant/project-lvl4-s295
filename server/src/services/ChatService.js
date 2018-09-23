import ApplicationService from './ApplicationService';

export default class extends ApplicationService {
  createUser(name) {
    const user = new this.entities.User(name);
    this.repositories.User.save(user);
    return user;
  }

  createChannel(name) {
    const channel = new this.entities.Channel(name);
    this.repositories.Channel.save(channel);
    return channel;
  }

  removeChannel(channelId) {
    this.repositories.Channel.remove(channelId);
  }

  createMessage(channelId, userId, text) {
    const channel = this.repositories.Channel.find(channelId);
    const user = this.repositories.User.find(userId);
    const message = new this.entities.Message(channel, user, text);
    this.repositories.Message.save(message);
    return message;
  }
}
