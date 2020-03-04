let webBaseUrl = process.env.WEB_BASE_URL_LOCAL;

if (process.argv[2] === process.env.ENV_DEV) webBaseUrl = process.env.WEB_BASE_URL_DEV;
if (process.argv[2] === process.env.ENV_PRO) webBaseUrl = process.env.WEB_BASE_URL_PRO;

const DP_LOGIN_URL = `${webBaseUrl}/admin_DPInfo`;
const RESET_PASSWORD_BASE_URL = `${webBaseUrl}/admin_DPInfo/confirm-password`;

module.exports = {
  ERROR_STATUS: {
    INVALID_REQUEST: 400,
    UNAUTHORIZED: 401,
    ACCESS_DENIED: 403,
    ACCOUNT_PROBLEM: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
  },

  ERROR_CODE: {
    INVALID_REQUEST: 'InvalidRequest',
    UNAUTHORIZED: 'Unauthorized',
    ACCESS_DENIED: 'AccessDenied',
    ACCOUNT_PROBLEM: 'AccountProblem',
    NOT_FOUND: 'NotFound',
    INTERNAL_ERROR: 'InternalError',
    SERVICE_UNAVAILABLE: 'ServerMaintainance'
  },

  ERROR_ID: {
    INTERNAL_ERROR: 'error-messages.system.system-error',
    ACCESS_DENIED: 'error-messages.system.access-denied',
    NOT_FOUND: 'error-messages.system.not-found',
    SERVICE_UNAVAILABLE: 'error-messages.system.service-unavailable',
    LOGIN_NOT_FOUND: 'error-messages.login.not-found',
    TOKEN_EXPIRED: 'error-messages.login.token-expired',
    TOKEN_NOT_FOUND: 'error-messages.login.token-not-found',
    EXISTED_LOGIN_ID: 'error-messages.login.existed-login-id',
    LOGIN_ID_NOT_FOUND: 'error-messages.login.login-id-not-found',
    INVALID_ACCOUNT: 'error-messages.login.invalid-username-password',
    CUSTOMER_ID_NOT_MATCHES: 'error-messages.login.customer_id-not-matches',
    LOGIN_INFO_NOT_FOUND: 'error-messages.login.login-info-not-found',

    UNAUTHORIZED: 'error-messages.auth.unauthorized',
    INVALID_TOKEN: 'error-messages.auth.invalid-token',
  
    CUSTOMER_NOT_FOUND: 'error-messages.customer.customer-not-found',
    CUSTOMER_DETAIL_NOT_FOUND: 'error-messages.customer.customer-detail-not-found',
    INVALID_CUSTOMER_ID: 'error-messages.customer.invalid-customer-id',
    INVALID_PAGINATION: 'error-messages.customer.invalid-pagination',
    INVALID_SERVICE_STATUS_CODE: 'error-messages.customer.service-status-code',
    STORE_CODE_DUPLICATE: 'error-messages.customer.store-code-duplicate',

    IMAGES_IN_ORDER_LIMIT: 'error-messages.order.images-in-order-limit',
    DOWNLOAD_TOKEN_NOT_FOUND: 'error-messages.order.download-token-not-found',
    UPLOAD_ORDER_NOT_FOUND: 'error-messages.order.upload-order-not-found',
    DOWNLOAD_COUNT_LIMIT: 'error-messages.order.download-count-limit',
    ORDER_EXPIRED: 'error-messages.order.order-expired',
    ORDER_NOT_COMMITTED: 'error-messages.order.order-not-committed',
    ACCESS_KEY_NOT_FOUND: 'error-messages.order.access-key-not-found',
    IMAGE_SIZE_LIMIT: 'error-messages.ezc.image-size-limit',
    IMAGE_SIZES_NOT_MATCH: 'error-messages.ezc.image-sizes-not-match',
    RESOURCE_NOT_FOUND: 'error-messages.ezc.resource-not-found',
    IMAGE_ID_NOT_IN_ORDER: 'error-messages.ezc.image-id-not-in-order',
    ORDER_COMMITTED: 'error-messages.ezc.order-committed',

    TERMS_OF_SERVICE_NOT_FOUND: 'error-messages.service.terms-of-service-not-found',
    PRIVACY_POLICY_NOT_FOUND: 'error-messages.service.privacy-policy-not-found',
    SETTING_NOT_FOUND: 'error-messages.setting.setting-not-found',
  },

  SUCCESS_STATUS: {
    LOGIN_SUCCESS: 200,
    CREATED: 201,
    UPDATED: 200,
    DELETED: 200
  },

  SUCCESS_CODE: {

  },

  COMMON_VARIABLE: {
    IMAGES_IN_ORDER_LIMIT: 100,
    DEFAULT_PAGE_LIMIT: 50,
    DEFAULT_PAGE_INDEX: 1,
    DEFAULT_RETENTION_PERIOD: 180,
    DEFAULT_DOWNLOAD_LIMIT: 100,
    DEFAULT_PASSWORD_REQUEST: true,
    RESET_PASSWORD_BASE_URL,
    DP_LOGIN_URL,
    ADMIN_MAIL_SUPPORT: 'support@xxxxxx.com',
    SES_SOURCE_EMAIL_LOCAL: 'hoangph271@gmail.com',
    SES_SOURCE_EMAIL_DEV: 'npc.test.omakase.test@gmail.com',
    SES_SOURCE_EMAIL_PRO: ' npc.test.omakase.prod@gmail.com',
    MAX_UPLOAD_IMAGE_BYTES: 412 * 1024 * 1024,
    RESET_TOKEN_TIMEOUT_MS: 15 * 60 * 1000,
    MAX_INTEGER: 4294967295,
    MS_PER_DAY: 24 * 60 * 60 * 1000,
    WEB_BASE_URL: webBaseUrl,
  },

  PERMISSION_LEVELS: {
    NPC: 1,
    DP: 0
  },

  UPLOAD_ORDER_STATUS: {
    COMMIT: 1,
    ROLLBACK: 0,
  },

};