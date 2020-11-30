import * as types from "./constants"
export const api_v1_choice_list = () => ({ type: types.API_V1_CHOICE_LIST })
export const api_v1_choice_listSucceeded = (response, starter) => ({
  type: types.API_V1_CHOICE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_choice_listFailed = (error, starter) => ({
  type: types.API_V1_CHOICE_LIST_FAILED,
  error,
  starter
})
export const api_v1_choice_create = data => ({
  type: types.API_V1_CHOICE_CREATE,
  data
})
export const api_v1_choice_createSucceeded = (response, starter) => ({
  type: types.API_V1_CHOICE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_choice_createFailed = (error, starter) => ({
  type: types.API_V1_CHOICE_CREATE_FAILED,
  error,
  starter
})
export const api_v1_choice_read = () => ({ type: types.API_V1_CHOICE_READ })
export const api_v1_choice_readSucceeded = (response, starter) => ({
  type: types.API_V1_CHOICE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_choice_readFailed = (error, starter) => ({
  type: types.API_V1_CHOICE_READ_FAILED,
  error,
  starter
})
export const api_v1_choice_update = data => ({
  type: types.API_V1_CHOICE_UPDATE,
  data
})
export const api_v1_choice_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CHOICE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_choice_updateFailed = (error, starter) => ({
  type: types.API_V1_CHOICE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_choice_partial_update = data => ({
  type: types.API_V1_CHOICE_PARTIAL_UPDATE,
  data
})
export const api_v1_choice_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CHOICE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_choice_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CHOICE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_choice_delete = () => ({ type: types.API_V1_CHOICE_DELETE })
export const api_v1_choice_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CHOICE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_choice_deleteFailed = (error, starter) => ({
  type: types.API_V1_CHOICE_DELETE_FAILED,
  error,
  starter
})
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (error, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
  starter
})
export const api_v1_question_list = () => ({ type: types.API_V1_QUESTION_LIST })
export const api_v1_question_listSucceeded = (response, starter) => ({
  type: types.API_V1_QUESTION_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_question_listFailed = (error, starter) => ({
  type: types.API_V1_QUESTION_LIST_FAILED,
  error,
  starter
})
export const api_v1_question_create = data => ({
  type: types.API_V1_QUESTION_CREATE,
  data
})
export const api_v1_question_createSucceeded = (response, starter) => ({
  type: types.API_V1_QUESTION_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_question_createFailed = (error, starter) => ({
  type: types.API_V1_QUESTION_CREATE_FAILED,
  error,
  starter
})
export const api_v1_question_read = () => ({ type: types.API_V1_QUESTION_READ })
export const api_v1_question_readSucceeded = (response, starter) => ({
  type: types.API_V1_QUESTION_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_question_readFailed = (error, starter) => ({
  type: types.API_V1_QUESTION_READ_FAILED,
  error,
  starter
})
export const api_v1_question_update = data => ({
  type: types.API_V1_QUESTION_UPDATE,
  data
})
export const api_v1_question_updateSucceeded = (response, starter) => ({
  type: types.API_V1_QUESTION_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_question_updateFailed = (error, starter) => ({
  type: types.API_V1_QUESTION_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_question_partial_update = data => ({
  type: types.API_V1_QUESTION_PARTIAL_UPDATE,
  data
})
export const api_v1_question_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_QUESTION_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_question_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_QUESTION_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_question_delete = () => ({
  type: types.API_V1_QUESTION_DELETE
})
export const api_v1_question_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_QUESTION_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_question_deleteFailed = (error, starter) => ({
  type: types.API_V1_QUESTION_DELETE_FAILED,
  error,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (error, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})
export const api_v1_step_list = () => ({ type: types.API_V1_STEP_LIST })
export const api_v1_step_listSucceeded = (response, starter) => ({
  type: types.API_V1_STEP_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_step_listFailed = (error, starter) => ({
  type: types.API_V1_STEP_LIST_FAILED,
  error,
  starter
})
export const api_v1_step_create = data => ({
  type: types.API_V1_STEP_CREATE,
  data
})
export const api_v1_step_createSucceeded = (response, starter) => ({
  type: types.API_V1_STEP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_step_createFailed = (error, starter) => ({
  type: types.API_V1_STEP_CREATE_FAILED,
  error,
  starter
})
export const api_v1_step_read = () => ({ type: types.API_V1_STEP_READ })
export const api_v1_step_readSucceeded = (response, starter) => ({
  type: types.API_V1_STEP_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_step_readFailed = (error, starter) => ({
  type: types.API_V1_STEP_READ_FAILED,
  error,
  starter
})
export const api_v1_step_update = data => ({
  type: types.API_V1_STEP_UPDATE,
  data
})
export const api_v1_step_updateSucceeded = (response, starter) => ({
  type: types.API_V1_STEP_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_step_updateFailed = (error, starter) => ({
  type: types.API_V1_STEP_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_step_partial_update = data => ({
  type: types.API_V1_STEP_PARTIAL_UPDATE,
  data
})
export const api_v1_step_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_STEP_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_step_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_STEP_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_step_delete = () => ({ type: types.API_V1_STEP_DELETE })
export const api_v1_step_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_STEP_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_step_deleteFailed = (error, starter) => ({
  type: types.API_V1_STEP_DELETE_FAILED,
  error,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (error, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
