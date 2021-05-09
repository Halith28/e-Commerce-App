/**
 * @author Abdul Halith
 * @email abd.halith994@gmail.com
 * @create date 2021-05-09
 * @modify date 2020-05-08
 * @desc All the environment variables are taken from process.env and exported
 * via Config variable.
 */

import dotenv from "dotenv";
dotenv.config();

let Config = {};

Config.api_url = process.env.REACT_APP_API_ENDPOINT;
Config.graphql = process.env.REACT_APP_GQL_ENDPOINT;
Config.socket = process.env.REACT_APP_SOCKET;

export default Config;
