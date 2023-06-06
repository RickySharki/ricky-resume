import { getEnv } from '@utils/getEnv'

const { VITE_USER_INFO } = getEnv()

// 差异化引入文件
export const { info } = await import(`./user/${VITE_USER_INFO}.ts`)
// export default userInfo
