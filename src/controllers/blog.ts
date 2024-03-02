import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req:Request, res: Response) => {
 try {
    
 } catch (e) {
     handleHttp(res, 'ERROR_GET_BLOG')
 }
}
const getItems = (req:Request, res: Response) => {
   try {
    
   } catch (e) {
       handleHttp(res, 'ERROR_GET_BLOGS')
   }
}
const updateItem = ( req:Request, res: Response) => {
   try {
    
   } catch (e) {
       handleHttp(res, 'UPDATE_BLOG_ERROR')
   }
}
const postItem = ({body}:Request, res: Response) => {
   try {
     res.send(body)
   } catch (e) {
       handleHttp(res, 'ERROR_POST_BLOG')
   }
}

const deleteItem = (req:Request, res: Response) => {
   try {
    
   } catch (e) {
       handleHttp(res, 'ERROR_DEL_BLOG')
   }
}

export {getItem, getItems, postItem, updateItem, deleteItem}

