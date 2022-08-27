import { RouterStatus } from './enum/router-status';

export class Router {
  public ip: string;
  public mac: string;
  public status: RouterStatus;
  public dateOfPurchase: Date;
  public productionDate: Date;
  public locationPartner: string;
}
