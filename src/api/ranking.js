
import request from '@/utils/request.js'

// swiper
export const getRankRead = () => {
  return request({
    url: '/test/wbcomic/home/rank_read',
    method: 'GET',
    params: {
      _type: 'h5'

    }
  })
}
export const getRankShare = () => {
  return request({
    url: '/test/wbcomic/home/rank_share',
    method: 'GET',
    params: {
      _type: 'h5'

    }
  })
}

export const getRank = () => {
  return request({
    url: '/test/wbcomic/home/rank',
    method: 'GET',
    params: {
      _type: 'h5'

    }
  })
}
