import express, {Request, Response} from "express"
import { request } from "http"
import { validateCube } from "./middleware/validateCube"
import routeBangunDatar from"./Route/bangunDatar"

const app = express()
const PORT = 8000

// allow to read JSON as request
app.use(express.json())

app.get(`/serena`, (request: Request, response:Response) => {
    return response.status(200).json({
        message: `Hello Serena anaknya Bu Siana`
    } )
})

// read a query request
app.get(`/moklet`, (request: Request,response: Response) => {
    // asumsikan data yang dikirim
    // adalah nama dan umur
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()
    let message: string = `My name is ${nama} and i'm ${umur} years old`
    return response.status(200).json(message)
})

// read data request from parameter
app.get(`/telkom/:nama/:gender`, (request: Request, response:Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `My name is ${nama} and i'm ${gender}`
    return response.status(200).json(message)
}) 







// read a request from body
app.post(`/moklet`, (request:Request, response:Response) => {
    // asumsikan data yang dikirim adalah
    // panjang dan lebar
    let panjang: number = request.body.panjang
    let lebar: number= request.body.lebar
    let luasPersegiPanjang: number = panjang * lebar
    let message = `Luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(message)
})


// buatlah sebuat request untuk mengonversi 
// suhu celcius ke farenheit, kelvin,dan reamur
// menggunakan request parameter
// exp: http://localhost:8000/celcius/80
// (80 adalah nilai celciusnya)
// response data ->
// {
    // reamur: ?, farenheit: ?, kelvin: ?

// }

// create request from count volume of long cube
app.post(`/balok`, validateCube,(request:Request, response:Response) => {
    // read panjang, lebar, tinggi
    let panjang: number= Number(request.body.panjang)
    let lebar: number= Number(request.body.lebar)
    let tinggi: number= Number(request.body.tinggi)

    let volum: number= panjang * lebar * tinggi
    return response.status(200).json({
        panjang, lebar, tinggi, volum
    })
})





app.get(`/celcius/:celcius`, (request: Request, response: Response) => {
    let celcius: number = Number(request.params.celcius)
    let celkefarenheit: number = (9/5) * celcius + 32
    let celkekelvin: number = celcius + 273
    let celkereamur: number = (4/5) * celcius
    let message = `celcius ${celcius}`
    let message1 = `farenheit ${celkefarenheit}`
    let message2 = `reamur ${celkereamur}`
    let message3 = `kelvin ${celkekelvin}`
    return response.status(200).json({message,message1,message2,message3})

})



/**register route of bangun datar */
app.use(routeBangunDatar)






app.listen (PORT, () => {
    console.log(`server running on port ${PORT}`);
})
