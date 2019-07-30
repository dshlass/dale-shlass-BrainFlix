import axios from 'axios';

  let testArray = []



const urlHandler = (endpoint) =>{
  const apiKey = 'a74bc77e-a64a-4c16-94a1-ba5cb480ac2e';
  return `https://project-2-api.herokuapp.com/${endpoint}?api_key=${apiKey}`
}

const getRequest = () => {
  let request = 'videos';
  let  url = urlHandler(request);

  axios({
      method: 'get',
      url: url
    }).then(requestData => {
      requestData.data.forEach(video => {
        testArray.push(video)
      });
    })

}
getRequest()



export default testArray;

