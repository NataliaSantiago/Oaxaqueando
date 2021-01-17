module.exports = {
    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'bdyzcfehrcomfhksbhmx-mysql.services.clever-cloud.com',
        user: process.env.DATABASE_USER || 'up1bqfux0eibfreq',
        password: process.env.DATABASE_PASSWORD || 'Oe4HhihpfWtMz8oLw7DZ',
        database: process.env.DATABASE_NAME || 'bdyzcfehrcomfhksbhmx'
    },
    port: process.env.PORT || 4000
};