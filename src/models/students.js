module.exports = (sequelize,Datatypes) =>{
    const Students = sequelize.define("students",{
        maHs:{
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tenHs:{
            type: Datatypes.STRING(50),
            allowNull: false
        },
        ngaySinh:{
            type: Datatypes.STRING(50),
            allowNull: true
        },
        soBuoiVang:{
            type: Datatypes.INTEGER,
            allowNull: true
        }
    }, {
        // // Vô hiệu hóa cột updatedAt
        // updatedAt: false,

        // // Nếu bạn muốn vô hiệu hóa cả createdAt và updatedAt
        // timestamps: false
    });
    return Students;
    
};