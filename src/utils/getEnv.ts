// import fs from 'fs'
// import dotenv from 'dotenv'

// const file = dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`))

// console.log('🚀 ~ file: getEnv.ts:6 ~ file:', file)
// for (const key in (file as object))
//   process.env[key] = file[key]

export const getEnv = () => {
  return import.meta.env
}
