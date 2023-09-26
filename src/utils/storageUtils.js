import store from "store";

const USER_KEY = "user_key";

const out = {
    // 保存 user
    saveUser(user) {
        store.set(USER_KEY, user);
    },

    // 读取 user
    getUser() {
        return store.get(USER_KEY) || {};
    },

    // 删除 user
    removeUser() {
        store.remove(USER_KEY);
    },
};


export default out;