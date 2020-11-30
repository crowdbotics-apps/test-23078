import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* api_v1_choice_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_choice_list, action)
    yield put(actions.api_v1_choice_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_choice_listFailed(err, action))
  }
}
function* api_v1_choice_listWatcher() {
  yield takeEvery(types.API_V1_CHOICE_LIST, api_v1_choice_listWorker)
}
function* api_v1_choice_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_choice_create, action)
    yield put(actions.api_v1_choice_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_choice_createFailed(err, action))
  }
}
function* api_v1_choice_createWatcher() {
  yield takeEvery(types.API_V1_CHOICE_CREATE, api_v1_choice_createWorker)
}
function* api_v1_choice_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_choice_read, action)
    yield put(actions.api_v1_choice_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_choice_readFailed(err, action))
  }
}
function* api_v1_choice_readWatcher() {
  yield takeEvery(types.API_V1_CHOICE_READ, api_v1_choice_readWorker)
}
function* api_v1_choice_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_choice_update, action)
    yield put(actions.api_v1_choice_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_choice_updateFailed(err, action))
  }
}
function* api_v1_choice_updateWatcher() {
  yield takeEvery(types.API_V1_CHOICE_UPDATE, api_v1_choice_updateWorker)
}
function* api_v1_choice_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_choice_partial_update, action)
    yield put(actions.api_v1_choice_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_choice_partial_updateFailed(err, action))
  }
}
function* api_v1_choice_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CHOICE_PARTIAL_UPDATE,
    api_v1_choice_partial_updateWorker
  )
}
function* api_v1_choice_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_choice_delete, action)
    yield put(actions.api_v1_choice_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_choice_deleteFailed(err, action))
  }
}
function* api_v1_choice_deleteWatcher() {
  yield takeEvery(types.API_V1_CHOICE_DELETE, api_v1_choice_deleteWorker)
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_question_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_question_list, action)
    yield put(actions.api_v1_question_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_question_listFailed(err, action))
  }
}
function* api_v1_question_listWatcher() {
  yield takeEvery(types.API_V1_QUESTION_LIST, api_v1_question_listWorker)
}
function* api_v1_question_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_question_create, action)
    yield put(actions.api_v1_question_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_question_createFailed(err, action))
  }
}
function* api_v1_question_createWatcher() {
  yield takeEvery(types.API_V1_QUESTION_CREATE, api_v1_question_createWorker)
}
function* api_v1_question_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_question_read, action)
    yield put(actions.api_v1_question_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_question_readFailed(err, action))
  }
}
function* api_v1_question_readWatcher() {
  yield takeEvery(types.API_V1_QUESTION_READ, api_v1_question_readWorker)
}
function* api_v1_question_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_question_update, action)
    yield put(actions.api_v1_question_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_question_updateFailed(err, action))
  }
}
function* api_v1_question_updateWatcher() {
  yield takeEvery(types.API_V1_QUESTION_UPDATE, api_v1_question_updateWorker)
}
function* api_v1_question_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_question_partial_update, action)
    yield put(actions.api_v1_question_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_question_partial_updateFailed(err, action))
  }
}
function* api_v1_question_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_QUESTION_PARTIAL_UPDATE,
    api_v1_question_partial_updateWorker
  )
}
function* api_v1_question_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_question_delete, action)
    yield put(actions.api_v1_question_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_question_deleteFailed(err, action))
  }
}
function* api_v1_question_deleteWatcher() {
  yield takeEvery(types.API_V1_QUESTION_DELETE, api_v1_question_deleteWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_step_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_step_list, action)
    yield put(actions.api_v1_step_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_step_listFailed(err, action))
  }
}
function* api_v1_step_listWatcher() {
  yield takeEvery(types.API_V1_STEP_LIST, api_v1_step_listWorker)
}
function* api_v1_step_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_step_create, action)
    yield put(actions.api_v1_step_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_step_createFailed(err, action))
  }
}
function* api_v1_step_createWatcher() {
  yield takeEvery(types.API_V1_STEP_CREATE, api_v1_step_createWorker)
}
function* api_v1_step_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_step_read, action)
    yield put(actions.api_v1_step_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_step_readFailed(err, action))
  }
}
function* api_v1_step_readWatcher() {
  yield takeEvery(types.API_V1_STEP_READ, api_v1_step_readWorker)
}
function* api_v1_step_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_step_update, action)
    yield put(actions.api_v1_step_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_step_updateFailed(err, action))
  }
}
function* api_v1_step_updateWatcher() {
  yield takeEvery(types.API_V1_STEP_UPDATE, api_v1_step_updateWorker)
}
function* api_v1_step_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_step_partial_update, action)
    yield put(actions.api_v1_step_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_step_partial_updateFailed(err, action))
  }
}
function* api_v1_step_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_STEP_PARTIAL_UPDATE,
    api_v1_step_partial_updateWorker
  )
}
function* api_v1_step_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_step_delete, action)
    yield put(actions.api_v1_step_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_step_deleteFailed(err, action))
  }
}
function* api_v1_step_deleteWatcher() {
  yield takeEvery(types.API_V1_STEP_DELETE, api_v1_step_deleteWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_choice_listWatcher,
    api_v1_choice_createWatcher,
    api_v1_choice_readWatcher,
    api_v1_choice_updateWatcher,
    api_v1_choice_partial_updateWatcher,
    api_v1_choice_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_login_createWatcher,
    api_v1_question_listWatcher,
    api_v1_question_createWatcher,
    api_v1_question_readWatcher,
    api_v1_question_updateWatcher,
    api_v1_question_partial_updateWatcher,
    api_v1_question_deleteWatcher,
    api_v1_signup_createWatcher,
    api_v1_step_listWatcher,
    api_v1_step_createWatcher,
    api_v1_step_readWatcher,
    api_v1_step_updateWatcher,
    api_v1_step_partial_updateWatcher,
    api_v1_step_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
