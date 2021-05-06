
import request from '@/utils/request.js'

export const getBanner = () => {
  return request({
    url: '/test/wbcomic/home/page_recommend_list',
    method: 'GET',
    params: {
      mca: 'h5_recommend_male',
      _type: 'h5'

    }
  })
}
