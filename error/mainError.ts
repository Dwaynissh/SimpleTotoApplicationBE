import { http } from "../utils/enums";

interface iError {
  name: string;
  message: string;
  status: http;
  success: boolean;
}

export class mainError extends Error {
  public readonly name: string;
  public readonly message: string;
  public readonly success: boolean = false;
  public readonly status: http;

  constructor(args: iError) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.message = args.message;
    this.name = args.name;
    this.status = args.status;

    if (this.success !== undefined) {
      this.success = args.success;
    }
    Error.captureStackTrace;
  }
}
