import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        console.log(ACCESS_TOKEN);
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                console.log(response);
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

//FAQ
export function getQuestions() {
    return request({
        url: API_BASE_URL + "/questions/all",
        method: 'GET'
    });
}

//DoctorList
export function getAllDoctors() {
    return request({
        url: API_BASE_URL + "/doctors",
        method: 'GET'
    });
}

//DoctorInfo
export function getDoctor(id) {
    return request({
        url: API_BASE_URL + `/doctor/${id}`,
        method: 'GET'
    });
}

export function getNews() {
    return request({
        url: API_BASE_URL + "/news/all",
        method: 'GET'
    });
}

//AvailableTimetable
export function getAvailableTimetable(username) {
    return request({
        url: API_BASE_URL + `/timetable/doctors/${username}`,
        method: 'GET'
    });
}

export function reserveAppointment(appointmentId) {
    return request({
        url: API_BASE_URL + `/timetable/reserveAppointment`,
        method: 'POST',
        body: JSON.stringify(appointmentId)
    });
}

export function getUserTimetable() {
    return request({
        url: API_BASE_URL + '/timetable/myAppointments',
        method: 'GET'
    })
}

export function removeAppointment(appointmentId) {
    return request({
        url: API_BASE_URL + '/timetable/client/removeAppointment',
        method: 'POST',
        body: JSON.stringify(appointmentId)
    })
}

//AdminPanel
export function addDoctor(id, name, surname, specialization, title) {
    return request({
        url: API_BASE_URL + '/setToDoctor',
        method: 'POST',
        body: JSON.stringify({
            "id": id,
            "name": name,
            "surname": surname,
            "specialization": specialization,
            "title": title
        })
    })
}

export function getAllClients() {
    return request({
        url: API_BASE_URL + "/clients/all",
        method: 'GET'
    });
}

export function getAllResults() {
    return request({
        url: API_BASE_URL + "/results/myResults",
        method: 'GET'
    })
}

//Timetable
export function addResult(resultText, timetableId) {
    return request({
        url: API_BASE_URL + '/results/addResult',
        method: 'POST',
        body: JSON.stringify({
            "resultText": resultText,
            "timetableId": timetableId,
        })
    })
}