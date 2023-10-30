import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

import * as bcryptjs from "bcryptjs";
import { JwtService} from '@nestjs/jwt';

import { CreateUserDto, UpdateAuthDto, RegisterUserDto, LoginDto } from './dto/index';

import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) 
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // console.log(createUserDto)
    
    try {
      const {password, ...userData} = createUserDto;

      //? 1º encriptar contraseña
      const newUser = new this.userModel({
        password: bcryptjs.hashSync(password, 10),
        ...userData
      });
      await newUser.save();
      const {password:_, ...user} = newUser.toJSON();
  
      //? 2º guardar usuario
      //* aquí retornamos el usuario, pero sin contraseña (user.entity.ts -> password?)
      //* la aplicación no tiene acceso a la contraseña, ni siquiera cifrada
      return user;
  
      // 3º Generar JWT
      
      
    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(`${createUserDto.email} ya existe`);
      }
      throw new InternalServerErrorException('Algun error interno ha ocurrido')
    }
    
  }


  async register(registerDto: RegisterUserDto){

    // create acepta un objeto de tipo RegisterUserDto porque cumple con los requisitos de CreateUserDto
    const user = await this.create(registerDto);
    console.log(user)

    return {
      user: user,
      token: this.getJwtToken({id: user._id})
    }
  }
  
  async login(loginDto: LoginDto): Promise<LoginResponse>{
    
    const {email, password} = loginDto;
    
    const user = await this.userModel.findOne({email})
    if(!user){
      throw new UnauthorizedException('credenciales no válidas - 1')
    }
    
    if (!bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('credenciales no válidas - 2')
    }
    
    //* Desestructuración para devolver usuario sin contraseña
    const {password:_, ...rest} = user.toJSON();
    
    //devolvemos un objeto de tipo LoginResponse (interface)
    return {
      user: rest,
      //? 3º Generar JWT
      token: this.getJwtToken({id: user.id}),
    };

  }


  async findUserById(id: string){
    const user = await this.userModel.findById(id);
    const {password, ...rest} = user.toJSON();
    return rest;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken(payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }
}
