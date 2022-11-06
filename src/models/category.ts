import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'categories',
    timestamps: false
})
export class Category extends Model{ //hedera del paquete squelize-typescript

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement : true,
    })
    public id: number;

    @Column({
        type: DataType.STRING(250),
        allowNull : false,
        unique : true,
    })
    public name: string;
    
    @Column({
        type: DataType.STRING(250),
    })
    public description: string;
    
}