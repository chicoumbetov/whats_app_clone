/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  WhatsApp: undefined;
  ChatRoomScreen: undefined;
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
  id: string;
  name: string;
  imageUri: string;
}

export type Message = {
  id: string;
  user: {
    id: string;
    name: string;
  };
  content: string;
  createdAt: string;
}

export type ChatRoom = {
  id: string;
  users: [User];
  lastMessage: Message;
}
