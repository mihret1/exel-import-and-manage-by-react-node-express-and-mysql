// const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Table=sequelize.define('table',
        {
            itemNo:DataTypes.FLOAT,
            description:DataTypes.STRING,
            rate:DataTypes.FLOAT,
            qty:DataTypes.FLOAT,
            amount:DataTypes.FLOAT

        },
        {
            freezeTableName:true
        }
    );
    return Table;
}