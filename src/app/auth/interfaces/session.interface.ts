import { IClient } from './../../clients/interfaces/client.interface';

export interface ISession {
  token: string;
  user: IClient;
}
