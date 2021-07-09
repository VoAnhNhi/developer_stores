import { AutoIncrement, Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName:'users',
    timestamps:true
})
export class User extends Model<User>{
    @AutoIncrement
    @PrimaryKey
    @Column({
        type:DataType.INTEGER,
        field:'id'
    })
    id!:number

    @Column({
        type:DataType.STRING(50),
        field:'username'
    })
    username!:string

    @Column({
        type:DataType.STRING(255),
        field:'password'
    })
    password!:string

    @CreatedAt
    @Column({
        field:'created_at'
    })
    createdAt!:Date

    @UpdatedAt
    @Column({
        field:'updated_at'
    })
    updatedAt!:Date

}