/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  WhatsApp: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type ChatParamList = {
  ChatScreen: undefined;
};

export type StatusParamList = {
  StatusScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
}

export type Message = {
  id: String;
  content: String;
  createdAt: String;
}

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
}