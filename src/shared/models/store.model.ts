import { AutoIncrement, BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { User } from "./user.model";

@Table({
    tableName:'stores',
    timestamps:true
})
export class Store extends Model<Store>{
    @AutoIncrement
    @PrimaryKey
    @Column({
        type:DataType.INTEGER,
        field:'id'
    })
    id!:number

    @Column({
        type:DataType.STRING,
        field:'name',
        allowNull:false
    })
    name!:string

    @Column({
        type:DataType.STRING,
        field:'description',
    })
    description!:string

    @Column({
        type:DataType.STRING,
        field:'email',
        allowNull:false
    })
    email!:string

    @Column({
        type:DataType.STRING,
        field:'address',
    })
    address!:string

    @Column({
        type:DataType.STRING,
        field:'phone',
    })
    phone!:string

    @ForeignKey(() => User)
    @Column({
        type:DataType.INTEGER,
        field:'ownerId'
    })
    ownerId!:number

    @BelongsTo(() => User,'ownerId')
    owner:[]

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