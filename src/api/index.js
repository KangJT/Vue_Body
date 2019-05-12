import {post, get} from '../service'

export function postLogin () {
  let body = {user_name: 'liuyu', user_pwd: 'Liuyu123?'}
  return post('/user/login', body)
}

export function getUser () {
  return get('/user/identity')
}
