module.exports = {
    "plugins": {
        'postcss-pxtorem': {
            rootValue: 37.5,  //适配的宽度  设计稿除10
            propList: ['*']  //适配设备的类型  *所有设备
        }
    }
}