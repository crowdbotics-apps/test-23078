import axios from "axios"
const sampleAPI = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const testAPI = axios.create({
  baseURL: "https://test-23078-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_choice_list(action) {
  return testAPI.get(`/api/v1/choice/`)
}
function api_v1_choice_create(action) {
  return testAPI.post(`/api/v1/choice/`, null, { data: action.data })
}
function api_v1_choice_read(action) {
  return testAPI.get(`/api/v1/choice/${action.id}/`)
}
function api_v1_choice_update(action) {
  return testAPI.put(`/api/v1/choice/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_choice_partial_update(action) {
  return testAPI.patch(`/api/v1/choice/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_choice_delete(action) {
  return testAPI.delete(`/api/v1/choice/${action.id}/`)
}
function api_v1_customtext_list(action) {
  return testAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return testAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return testAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return testAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_list(action) {
  return testAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return testAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return testAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return testAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_login_create(action) {
  return testAPI.post(`/api/v1/login/`)
}
function api_v1_question_list(action) {
  return testAPI.get(`/api/v1/question/`)
}
function api_v1_question_create(action) {
  return testAPI.post(`/api/v1/question/`, null, { data: action.data })
}
function api_v1_question_read(action) {
  return testAPI.get(`/api/v1/question/${action.id}/`)
}
function api_v1_question_update(action) {
  return testAPI.put(`/api/v1/question/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_question_partial_update(action) {
  return testAPI.patch(`/api/v1/question/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_question_delete(action) {
  return testAPI.delete(`/api/v1/question/${action.id}/`)
}
function api_v1_signup_create(action) {
  return testAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function api_v1_step_list(action) {
  return testAPI.get(`/api/v1/step/`)
}
function api_v1_step_create(action) {
  return testAPI.post(`/api/v1/step/`, null, { data: action.data })
}
function api_v1_step_read(action) {
  return testAPI.get(`/api/v1/step/${action.id}/`)
}
function api_v1_step_update(action) {
  return testAPI.put(`/api/v1/step/${action.id}/`, null, { data: action.data })
}
function api_v1_step_partial_update(action) {
  return testAPI.patch(`/api/v1/step/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_step_delete(action) {
  return testAPI.delete(`/api/v1/step/${action.id}/`)
}
function rest_auth_login_create(action) {
  return testAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return testAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return testAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return testAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return testAPI.post(`/rest-auth/password/reset/`, null, { data: action.data })
}
function rest_auth_password_reset_confirm_create(action) {
  return testAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return testAPI.post(`/rest-auth/registration/`, null, { data: action.data })
}
function rest_auth_registration_verify_email_create(action) {
  return testAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return testAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return testAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return testAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_choice_list,
  api_v1_choice_create,
  api_v1_choice_read,
  api_v1_choice_update,
  api_v1_choice_partial_update,
  api_v1_choice_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_question_list,
  api_v1_question_create,
  api_v1_question_read,
  api_v1_question_update,
  api_v1_question_partial_update,
  api_v1_question_delete,
  api_v1_signup_create,
  api_v1_step_list,
  api_v1_step_create,
  api_v1_step_read,
  api_v1_step_update,
  api_v1_step_partial_update,
  api_v1_step_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
