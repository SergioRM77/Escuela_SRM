import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    _id?: string;

    @Prop({ unique: true, required: true })
    email: string;
    
    @Prop({ required: true})
    name: string;
    
    @Prop({ minlength: 6, required: true })//para enviar datos a la base de datos es requrida
    password?: string;//para trabajar con los datos devueltos en la aplicación podemos ponerlo opcional ?
    
    @Prop({default: true})
    isActive: boolean;
    
    @Prop({ type:[String], default:['user']})
    roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);