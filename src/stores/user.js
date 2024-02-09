import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCookie, setCookie } from '@/shared/utils'
import * as constant from '@/shared/constant'

export const useUserStore = defineStore('user', () => {
  const userDetails = ref()

  const count = ref(0)

  return { count, doubleCount, increment }
})
