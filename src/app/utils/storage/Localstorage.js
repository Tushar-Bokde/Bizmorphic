function getValuefromLocalStorage(key) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
}

function setValuefromLocalStorage(key, data) {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, data);
  }
}

function removeValueFromLocalStorage(key) {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(key);
  }
}

export default {
  ORGANISATION_ID: {
    key: "ORGANISATION_ID",
    get: function () {
      return getValuefromLocalStorage(this.key);
    },
    set: function (data) {
      return setValuefromLocalStorage(this.key, data);
    },
    remove: function () {
      removeValueFromLocalStorage(this.key);
    },
  },
  USER_ID: {
    key: "ADMIN",
    get: function () {
      return getValuefromLocalStorage(this.key);
    },
    set: function (data) {
      return setValuefromLocalStorage(this.key, data);
    },
    remove: function () {
      removeValueFromLocalStorage(this.key);
    },
  },
  USERNAME: {
    key: "USERNAME",
    get: function () {
      return getValuefromLocalStorage(this.key);
    },
    set: function (data) {
      return setValuefromLocalStorage(this.key, data);
    },
    remove: function () {
      removeValueFromLocalStorage(this.key);
    },
  },
  EMAIL: {
    key: "EMAIL",
    get: function () {
      return getValuefromLocalStorage(this.key);
    },
    set: function (data) {
      return setValuefromLocalStorage(this.key, data);
    },
    remove: function () {
      removeValueFromLocalStorage(this.key);
    },
  },
  IS_LOGGED_IN: {
    key: "IS_LOGGED_IN",
    get: function () {
      return getValuefromLocalStorage(this.key);
    },
    set: function (data) {
      return setValuefromLocalStorage(this.key, data);
    },
    remove: function () {
      removeValueFromLocalStorage(this.key);
    },
  },
  TOKEN: {
    key: "TOKEN",
    get: function () {
      return getValuefromLocalStorage(this.key);
    },
    set: function (data) {
      return setValuefromLocalStorage(this.key, data);
    },
    remove: function () {
      removeValueFromLocalStorage(this.key);
    },
  },
  JWT_TOKEN: {
    key: "JWT",
    get: function () {
      return getValuefromLocalStorage(this.key);
    },
    set: function (data) {
      return setValuefromLocalStorage(this.key, data);
    },
    remove: function () {
      return removeValueFromLocalStorage(this.key);
    },
  },
  PERMISSIONS: {
    key: "ROLES",
    get: function () {
      return getValuefromLocalStorage(this.key);
    },
    set: function (data) {
      return setValuefromLocalStorage(this.key, data);
    },
    remove: function () {
      return removeValueFromLocalStorage(this.key);
    },
  },
  clear: function () {
    localStorage.clear();
  },
};
