interface AxiosConfig {
  baseURL: string,
  timeout: number
}
interface Config {
  axios: AxiosConfig
}
const config = {
  development: {
    axios: {
      baseURL: "http://localhost:8080/https://ftx.com/api/",
      timeout: 2500
    }
  },
  test: {
    axios: {
      baseURL: "http://localhost:8080/https://ftx.com/api/",
      timeout: 2500
    }
  },
  production: {}
};
export default config[process.env.NODE_ENV] as Config;
