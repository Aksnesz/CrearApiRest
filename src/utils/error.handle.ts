import { Response } from "express"

const handleHttp = (res: Response, error:string, errprRaw?: any) => {
 res.status(500)
 res.send({error})
}

export {handleHttp}