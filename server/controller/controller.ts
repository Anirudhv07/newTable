import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { configKeys } from "../configKey";



const controllers = {
  getAllData: async (req: Request, res: Response) => {

  
   

    try {
      const response: AxiosResponse = await axios.get(
        `${configKeys.BASE_URL}`
      );
      console.log(response);
      
   res.json(response.data)
    
    } catch (error) {

      res.status(500).send("Internal Server Error");
    }
  },
};

export default controllers;
