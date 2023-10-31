import axios from 'axios';
import { getSessionToken } from '@/store/modules/auth/utils';

const getToken = () => {
  const token = getSessionToken();
  return token ? `Bearer ${token}` : null;
};

const port = 8090;
const serverBaseUrl = `http://localhost:${port}/`;

class Axios {
  constructor() {
    this.instance = axios.create({
      baseURL: serverBaseUrl,
      responseType: 'text',
      headers: {
        common: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      },
    });

    this.post = async (url, data, config = {}) => {
      const cfg = { ...config };
      if (!cfg.headers) {
        cfg.headers = {};
      }
      cfg.headers.authorization = getToken();
      cfg.mode = 'no-cors';
      return this.instance.post(url, data, cfg);
    };

    this.put = async (url, data, config = {}) => {
      const cfg = { ...config };
      if (!cfg.headers) {
        cfg.headers = {};
      }
      cfg.headers.authorization = getToken();
      return this.instance.put(url, data, cfg);
    };

    this.get = async (url, config = {}) => {
      const cfg = { ...config };
      if (!cfg.headers) {
        cfg.headers = {};
      }
      cfg.headers.authorization = getToken();
      cfg.mode = 'no-cors';
      return this.instance.get(url, cfg);
    };

    this.delete = async (url, config = {}) => {
      const cfg = { ...config };
      if (!cfg.headers) {
        cfg.headers = {};
      }
      cfg.headers.authorization = getToken();
      return this.instance.delete(url, cfg);
    };

    this.method = {
      get: async (url, config = {}) => {
        const cfg = { ...config };
        if (!cfg.headers) {
          cfg.headers = {};
        }
        cfg.headers.authorization = getToken();

        return this.instance({
          url: serverBaseUrl + url, baseURL: '', method: 'GET', ...cfg,
        });
      },

      post: async (url, data, config = {}) => {
        const cfg = { ...config };
        if (!cfg.headers) {
          cfg.headers = {};
        }
        cfg.headers.authorization = getToken();
        return this.instance({
          url: serverBaseUrl + url, baseURL: '', method: 'POST', data, ...cfg,
        });
      },

      delete: async (url, config = {}) => {
        const cfg = { ...config };
        if (!cfg.headers) {
          cfg.headers = {};
        }
        cfg.headers.authorization = getToken();
        return this.instance({
          url: serverBaseUrl + url, baseURL: '', method: 'DELETE', ...cfg,
        });
      },
    };
  }
}

export default (new Axios());
