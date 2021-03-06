import * as axios from "axios";

//@ts-ignore
const instance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/images',
});

export const searchAPI = {
  getFilms() {
      return instance.get()
    },
  //   getImgBig(imgId) {
  //     return instance.get(`/${imgId}`)
  //   },
  postSearch(id: number, comments: any) {
    return instance.post(`/${id}/comments`, { ...comments });
  },
};


//@ts-ignore
const instanceAuth = axios.create({
  baseURL: "https://reqres.in/api/",
});

export const AuthAPI = {
  postAuth(email: string, password: string) {
    return instanceAuth.post(`register`, { email, password });
  },
};