import { Length } from "class-validator";
import { IsNotEmpty, IsOptional } from "class-validator/types/decorator/decorators";

export class CreateCategoryDto{

    @Length(3, 50)
    @IsNotEmpty()
    name: string;

    @Length(10, 250)
    @IsOptional()
    description: string;

}