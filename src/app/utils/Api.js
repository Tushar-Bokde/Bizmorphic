import routes from "./routes";
import Localstorage from "./storage/Localstorage";

const token = Localstorage.JWT_TOKEN.get();

export const apiGet = (url, serviceName) => {
  let apiUrl = verifyService(serviceName);
  if (apiUrl) {
    const res = new Promise((resolve, reject) => {
      fetch(`${apiUrl}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
    return res;
  }
};

export const apiPost = async (url, values, serviceName) => {
  let apiUrl = verifyService(serviceName);
  console.log(`Path ${apiUrl}${url}`);
  if (apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(`${apiUrl}${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export const apiPut = (url, values, serviceName) => {
  let apiUrl = verifyService(serviceName);
  if (apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(`${apiUrl}${url}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export const apiDelete = (url, serviceName) => {
  let apiUrl = verifyService(serviceName);
  if (apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(`${apiUrl}${url}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export const apiPostImage = async (url, values, serviceName) => {
  let apiUrl = verifyService(serviceName);
  if (apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(`${apiUrl}${url}`, {
        method: "POST",
        headers: {
          token: token,
        },
        body: values,
      })
        .then((response) => {
          if (!response.ok) {
            throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
          }
          resolve(response.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

function verifyService(serviceName) {
  const urls = {
    BLOG_MS: routes.BLOG_MS.BASE_PATH,
    USER_MS: routes.USER_MS.BASE_PATH,
    ORGANIZATION_PROFILE: routes.ORGANIZATION_PROFILE.ORGANIZATION_PATH,
    PAYMENT_MS: routes.PAYMENT_MS.PAYMENT_MS_PATH,
    HR_TOOLS: routes.HR_TOOLS.BASE_PATH,
    SIGNTAURE_API: routes.SIGNTAURE_API.BASE_PATH,
    HR_TOOLS: routes.HR_TOOLS.BASE_PATH,
    CALCULATOR_TOOL: routes.CALCULATOR_TOOL.BASE_PATH,
    SHARED_API: routes.SHARE_API.BASE_PATH,
    SHARED_DOC: routes.SHARED_DOCS.BASE_PATH,
    GOOGLE_API: routes.GOOGLE_APIS.BASE_PATH,
    REPORT  : routes.REPORT.BASE_PATH , 
    RECOMMAND : routes.RECOMMANDATION.BASE_PATH
  };
  return urls[serviceName];
}
