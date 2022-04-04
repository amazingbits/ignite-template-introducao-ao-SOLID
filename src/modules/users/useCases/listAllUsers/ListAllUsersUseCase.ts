/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {

    const findUserById = this.usersRepository.findById(user_id);
    if(!findUserById) {
      throw new Error("User not found!");
    }

    if(findUserById.admin === false) {
      throw new Error("You are not an Admin User");
    }
    
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
