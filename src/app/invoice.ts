export class Invoice {
  constructor(
  public id: number,
  public client: string,
  public clientGroup: string,
  public parkingTime: number,
  public dueDate: string,
  public grandTotal: number,
  public isPaid: boolean
  ) {  }
}
