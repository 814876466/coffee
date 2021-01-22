// 引入封装好的axios
import request from '@/utils/request.js'

// 一个接口暴露一个函数

// swiper
export const getRankRead = () => {
  // return的是axios返回的promise对象
  return request({
    url: '/test/wbcomic/home/rank_read',
    method: 'GET',
    // 查询字符串参数
    params: {
      _type: 'h5'

    }
  })
}
export const getRankShare = () => {
  // return的是axios返回的promise对象
  return request({
    url: '/test/wbcomic/home/rank_share',
    method: 'GET',
    // 查询字符串参数
    params: {
      _type: 'h5'

    }
  })
}

export const getRank = () => {
  // return的是axios返回的promise对象
  return request({
    url: '/test/wbcomic/home/rank',
    method: 'GET',
    // 查询字符串参数
    params: {
      _type: 'h5'

    }
  })
}
