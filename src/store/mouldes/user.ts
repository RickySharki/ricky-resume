import { defineStore } from 'pinia'
import { importAsyncFiles } from 'src/ownerInfo/index'
import { usePromise } from '@utils/usePromise'
export const useUserStore = defineStore(
  'user',
  () => {
    const { result: userInfo } = usePromise(importAsyncFiles)
    return {
      userInfo,
    }
  },
  {
    persist: true,
  },
)
