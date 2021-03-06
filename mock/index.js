import Mock from 'mockjs'
import datajson from '../data.json'

Mock.mock('/good/seller', {
  code: 0,
  codeMsg: 'Success',
  data: datajson.seller
})
Mock.mock('/good/goods', {
  code: 0,
  codeMsg: 'Success',
  data: datajson.goods
})
Mock.mock('/good/ratings', {
  code: 0,
  codeMsg: 'Success',
  data: datajson.ratings
})
