import { isNotEmpty } from "class-validator";
import { IsEmail, isEmail, IsNotEmpty } from "class-validator";
//mport { IsNotEmpty } from "class-validator/types/decorator/decorators";

export class CreateUserDto{

 //This is the validator that username will not empty if then it shows error
@IsNotEmpty()
username : string;

@IsEmail()
email : string



}