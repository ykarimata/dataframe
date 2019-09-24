const Dataframe = require("dataframe-js").DataFrame
const fs = require("fs")

const targetCSV = __dirname + '\\data.csv'

let fsData = fs.createReadStream(targetCSV)
console.log("csvファイルの中身を表示")
console.log("----------------------")
fsData.pipe(process.stdout)

const successFunc = df => {
    console.log("\n")
    console.log("number列の統計情報を表示")
    console.log("----------------------")
    console.log("最大値：" + df.stat.max("number"))
    console.log("最小値：" + df.stat.min("number"))
    console.log("合計値値：" + df.stat.sum("number"))
    console.log("平均値：" + df.stat.mean("number"))
    console.log("標準偏差：" + df.stat.sd("number"))
    return df
}
const errorFunc = error => {
    console.log(error)
}

// let csvdf = Dataframe.fromCSV('data.csv').then(df => df)
let csvdf = Dataframe.fromCSV(targetCSV).then(successFunc, errorFunc)