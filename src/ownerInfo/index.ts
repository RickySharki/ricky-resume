import { getEnv } from '@utils/getEnv'
import type { Info } from 'src/model/user'

const { VITE_USER_INFO } = getEnv()

export const importAsyncFiles = async (): Promise<Info> => {
  const { info } = await import(`./user/${VITE_USER_INFO}.ts`)
  return info
}

// export default userInfo
