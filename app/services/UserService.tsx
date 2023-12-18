import HttpCommon from "./HttpCommon";

class UserService {
  get() {
    return HttpCommon.get(`users`)
  }

  show(id: any) {
    return HttpCommon.get(`users/${id}`)
  }

  store(attributes: any) {
    return HttpCommon.post(`users`, attributes)
  }

  update(id: any, attributes: any) {
    return HttpCommon.put(`users/${id}`, attributes)
  }

  delete(id: any) {
    return HttpCommon.delete(`users/${id}`)
  }
}

export default new UserService