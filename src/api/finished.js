// 引入封装好的axios
import request from '@/utils/request.js'

// 一个接口暴露一个函数

// swiper
export const getFinished = () => {
  // return的是axios返回的promise对象
  return request({
    url: '/test/wbcomic/home/recommend_list',
    method: 'GET',
    // 查询字符串参数
    params: {
      location_en: 'ending_works_list',
      _type: 'h5'

    }
  })
}
