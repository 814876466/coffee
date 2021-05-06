
import request from '@/utils/request.js'

// swiper
export const getFinished = () => {
  return request({
    url: '/test/wbcomic/home/recommend_list',
    method: 'GET',
    params: {
      location_en: 'ending_works_list',
      _type: 'h5'

    }
  })
}
