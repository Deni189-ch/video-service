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
  postSearch(comments: string) {
    debugger
    return instance.post(`/${1}/comments`, { comments });
  },
};
