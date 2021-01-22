// 引入封装好的axios
import request from '@/utils/request.js'

// 一个接口暴露一个函数

// swiper
export const getBanner = () => {
  // return的是axios返回的promise对象
  return request({
    url: '/test/wbcomic/home/page_recommend_list',
    method: 'GET',
    // 查询字符串参数
    params: {
      mca: 'h5_recommend_male',
      _type: 'h5'

    }
  })
}
