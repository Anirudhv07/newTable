import dotenv from 'dotenv'

dotenv.config()

export const configKeys={
    BASE_URL:process.env.BASE_URL as string,
    PORT:process.env.PORT as string,



   
}