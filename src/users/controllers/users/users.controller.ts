import { Controller, Get, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Request, request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dto/createuser.dto';


// this is decorator && users is the endpoint route

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return{
            username : 'Armaan' , email : 'arman.kanpur4080@gmail.com'
        }
    }
    // @Post()
    // createUser(@Req() request : Request , @Res() response : Response){

    //     console.log(request.body);
    //     response.send('Created');

    // }

    @Post('create')
    @UsePipes(new ValidationPipe()) // To use validator we use validation pipes
    createUser( @Body() userData : CreateUserDto){
        console.log(userData);
        return {};
    }

// Params 
    @Get(':id')
    getUserById(@Param('id' , ParseIntPipe) id : Number){ // ParseIntPipe for type conversion
console.log(id);
return {id}

    }

}
