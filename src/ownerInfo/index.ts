import { getEnv } from '@utils/getEnv'

const { VITE_USER_INFO } = getEnv()

export const importAsyncFiles = async () => {
  return await import(`./user/${VITE_USER_INFO}.ts`)
}

// export default userInfo
