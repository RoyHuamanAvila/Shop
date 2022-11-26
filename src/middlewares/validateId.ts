import { Request, Response, NextFunction } from "express"
import mongoose from "mongoose"

export const validateId = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        if( !mongoose.Types.ObjectId.isValid(id)) return res.status(500).json({error: "This id is not valid"})
        next();
    } catch (error) {
        console.log(error)
    }
}
