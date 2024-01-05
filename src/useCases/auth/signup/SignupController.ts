import { Request, Response } from "express";
import { ISignup } from "../../../domain/useCases/ISignup";
import SignupDTO from "./SignupDTO";

export default class SignupController {
  constructor(private readonly signup: ISignup) { }

  handle = async (req: Request, res: Response) => {
    const { email, fullName, password, username } =
      req.body as unknown as SignupDTO;
    await this.signup.execute({ email, fullName, password, username });
    res.status(201).json({ message: 'Account created successfully' });
  };
}
