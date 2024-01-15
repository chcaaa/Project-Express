import { Request, Response } from "express";

const volumeKubus = (request: Request, response: Response)=> {
        try {
          const s: number = Number(request.body.s)
          const volume = s * s * s
          return response.status(200).json({
            status : true,
            s,
            volume
          })
            
    
        } catch (error) {
            return response.status(500).json({
                status: false,
                message: error
            })
    
        }
    }
const lpKubus = (request: Request, response: Response)=> {
        try {
          const p: number = Number(request.body.p)
          const l: number = Number(request.body.l)
          const t: number = Number(request.body.t)
          const lp = 2 * (p * l + p * t + l * t)
          return response.status(200).json({
            status : true,
            p,
            l,
            t,
            lp
          })
            
    
        } catch (error) {
            return response.status(500).json({
                status: false,
                message: error
            })
    
        }
    }
const volumeTabung = (request: Request, response: Response)=> {
        try {
          const phi = Math.PI
          const r: number = Number(request.body.r)
          const t: number = Number(request.body.t)
          const volume = phi * r * r * t
          return response.status(200).json({
            status : true,
            r,
            t,
            volume
          })
            
    
        } catch (error) {
            return response.status(500).json({
                status: false,
                message: error
            })
    
        }
    }
const lpTabung = (request: Request, response: Response)=> {
        try {
          const phi = Math.PI
          const r: number = Number(request.body.r)
          const t: number = Number(request.body.t)
          const lp = 2 * phi * r * (r + t)
          return response.status(200).json({
            status : true,
            r,
            t,
            lp
          })
            
    
        } catch (error) {
            return response.status(500).json({
                status: false,
                message: error
            })
    
        }
    }
const volumeBalok = (request: Request, response: Response)=> {
        try {

          const p: number = Number(request.body.p)
          const l: number = Number(request.body.l)
          const t: number = Number(request.body.t)
          const volume = p * l * t
          return response.status(200).json({
            status : true,
            p,
            l,
            t,
            volume
          })
            
    
        } catch (error) {
            return response.status(500).json({
                status: false,
                message: error
            })
    
        }
    }
const lpBalok = (request: Request, response: Response)=> {
        try {

          const p: number = Number(request.body.p)
          const l: number = Number(request.body.l)
          const t: number = Number(request.body.t)
          const lp = 2 * (p*l + p*t + l*t)
          return response.status(200).json({
            status : true,
            p,
            l,
            t,
            lp
          })
            
    
        } catch (error) {
            return response.status(500).json({
                status: false,
                message: error
            })
    
        }
    }
