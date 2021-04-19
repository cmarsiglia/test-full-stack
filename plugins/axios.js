export default function ({ app, $axios }, inject) {
  // Create a custom axios instance
  const token = app.$cookies.get('sesionID') ? app.$cookies.get('sesionID') : null
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    }
  })
  // Set baseURL to something different
  api.setBaseURL('http://localhost/api')
  // Inject to context as $api
  inject('api', api)
}
