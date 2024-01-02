export interface IPubliser {
  publish(data: any): Promise<void>;
}
