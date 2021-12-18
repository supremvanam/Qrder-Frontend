import axios from "axios";


const url = "http://comp231qrderapi-dev.us-east-2.elasticbeanstalk.com/api/restaurants";

const orderUrl = "http://127.0.0.1:3003/order";

export const getAllOrder = async () => {
    return await axios.get(`${orderUrl}`);
}


export const getAllMenu = async () => {
    return await axios.get(`${url}`);
}