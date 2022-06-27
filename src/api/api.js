import axios from "axios";

//const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b8437598-fd8d-4c32-a8c9-93e9c8bb12d4'
    }
})

/* export const getUsers = (currentPage, pageSize) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
            return response.data;
        })
} */

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) //baseURL забит в строку запроса по умолчанию
            .then(response => {
                return response.data;
            })
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`) //baseURL забит в строку запроса по умолчанию
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }

}
export const authAPI = {
  
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }

}

