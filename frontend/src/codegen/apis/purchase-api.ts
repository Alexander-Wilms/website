/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration"
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios"
import globalAxios from "axios"
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common"
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base"
// @ts-ignore
import { BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost } from "../model"
// @ts-ignore
import { GenerateUpdateTokenResponse } from "../model"
// @ts-ignore
import { HTTPValidationError } from "../model"
// @ts-ignore
import { ResponseCheckPurchasesPurchasesCheckPurchasesPost } from "../model"
// @ts-ignore
import { ResponseGetDownloadTokenPurchasesGenerateDownloadTokenPost } from "../model"
// @ts-ignore
import { StorefrontInfo } from "../model"
/**
 * PurchaseApi - axios parameter creator
 * @export
 */
export const PurchaseApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * Checks whether the logged in user is able to download all of the given app refs.  App IDs can be in the form of full refs, e.g. \"app/org.gnome.Maps/x86_64/stable\", or just the app ID, e.g. \"org.gnome.Maps\".
     * @summary Check Purchases
     * @param {Array<string>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkPurchasesPurchasesCheckPurchasesPost: async (
      requestBody: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'requestBody' is not null or undefined
      assertParamExists(
        "checkPurchasesPurchasesCheckPurchasesPost",
        "requestBody",
        requestBody,
      )
      const localVarPath = `/purchases/check-purchases`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter["Content-Type"] = "application/json"

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        requestBody,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Generates a download token for the given app IDs. App IDs should be in the form of full refs, e.g. \"app/org.gnome.Maps/x86_64/stable\".
     * @summary Get Download Token
     * @param {BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost} bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDownloadTokenPurchasesGenerateDownloadTokenPost: async (
      bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost' is not null or undefined
      assertParamExists(
        "getDownloadTokenPurchasesGenerateDownloadTokenPost",
        "bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost",
        bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
      )
      const localVarPath = `/purchases/generate-download-token`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter["Content-Type"] = "application/json"

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Gets whether the app is Free Software based on the app ID and license, even if the app is not in the appstream database yet. This is needed in flat-manager-hooks to run validations the first time an app is uploaded.
     * @summary Get Is Free Software
     * @param {string} appId
     * @param {string | null} [license]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet: async (
      appId: string,
      license?: string | null,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'appId' is not null or undefined
      assertParamExists(
        "getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet",
        "appId",
        appId,
      )
      const localVarPath = `/purchases/storefront-info/is-free-software`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (appId !== undefined) {
        localVarQueryParameter["app_id"] = appId
      }

      if (license !== undefined) {
        localVarQueryParameter["license"] = license
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * This endpoint is used by the flathub-hooks scripts to get information about an app to insert into the appstream file and commit metadata.
     * @summary Get Storefront Info
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStorefrontInfoPurchasesStorefrontInfoGet: async (
      appId: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'appId' is not null or undefined
      assertParamExists(
        "getStorefrontInfoPurchasesStorefrontInfoGet",
        "appId",
        appId,
      )
      const localVarPath = `/purchases/storefront-info`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (appId !== undefined) {
        localVarQueryParameter["app_id"] = appId
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Generates an update token for a user account. This token allows the user to generate download tokens for apps they already own, but does not grant permission to do anything else. By storing this token, flathub-authenticator is able to update apps without user interaction.
     * @summary Get Update Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUpdateTokenPurchasesGenerateUpdateTokenPost: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/purchases/generate-update-token`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * PurchaseApi - functional programming interface
 * @export
 */
export const PurchaseApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = PurchaseApiAxiosParamCreator(configuration)
  return {
    /**
     * Checks whether the logged in user is able to download all of the given app refs.  App IDs can be in the form of full refs, e.g. \"app/org.gnome.Maps/x86_64/stable\", or just the app ID, e.g. \"org.gnome.Maps\".
     * @summary Check Purchases
     * @param {Array<string>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async checkPurchasesPurchasesCheckPurchasesPost(
      requestBody: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ResponseCheckPurchasesPurchasesCheckPurchasesPost>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.checkPurchasesPurchasesCheckPurchasesPost(
          requestBody,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     * Generates a download token for the given app IDs. App IDs should be in the form of full refs, e.g. \"app/org.gnome.Maps/x86_64/stable\".
     * @summary Get Download Token
     * @param {BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost} bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDownloadTokenPurchasesGenerateDownloadTokenPost(
      bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ResponseGetDownloadTokenPurchasesGenerateDownloadTokenPost>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDownloadTokenPurchasesGenerateDownloadTokenPost(
          bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     * Gets whether the app is Free Software based on the app ID and license, even if the app is not in the appstream database yet. This is needed in flat-manager-hooks to run validations the first time an app is uploaded.
     * @summary Get Is Free Software
     * @param {string} appId
     * @param {string | null} [license]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet(
      appId: string,
      license?: string | null,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet(
          appId,
          license,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     * This endpoint is used by the flathub-hooks scripts to get information about an app to insert into the appstream file and commit metadata.
     * @summary Get Storefront Info
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStorefrontInfoPurchasesStorefrontInfoGet(
      appId: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorefrontInfo>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getStorefrontInfoPurchasesStorefrontInfoGet(
          appId,
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     * Generates an update token for a user account. This token allows the user to generate download tokens for apps they already own, but does not grant permission to do anything else. By storing this token, flathub-authenticator is able to update apps without user interaction.
     * @summary Get Update Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUpdateTokenPurchasesGenerateUpdateTokenPost(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenerateUpdateTokenResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUpdateTokenPurchasesGenerateUpdateTokenPost(
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
  }
}

/**
 * PurchaseApi - factory interface
 * @export
 */
export const PurchaseApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = PurchaseApiFp(configuration)
  return {
    /**
     * Checks whether the logged in user is able to download all of the given app refs.  App IDs can be in the form of full refs, e.g. \"app/org.gnome.Maps/x86_64/stable\", or just the app ID, e.g. \"org.gnome.Maps\".
     * @summary Check Purchases
     * @param {Array<string>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkPurchasesPurchasesCheckPurchasesPost(
      requestBody: Array<string>,
      options?: any,
    ): AxiosPromise<ResponseCheckPurchasesPurchasesCheckPurchasesPost> {
      return localVarFp
        .checkPurchasesPurchasesCheckPurchasesPost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Generates a download token for the given app IDs. App IDs should be in the form of full refs, e.g. \"app/org.gnome.Maps/x86_64/stable\".
     * @summary Get Download Token
     * @param {BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost} bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDownloadTokenPurchasesGenerateDownloadTokenPost(
      bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
      options?: any,
    ): AxiosPromise<ResponseGetDownloadTokenPurchasesGenerateDownloadTokenPost> {
      return localVarFp
        .getDownloadTokenPurchasesGenerateDownloadTokenPost(
          bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * Gets whether the app is Free Software based on the app ID and license, even if the app is not in the appstream database yet. This is needed in flat-manager-hooks to run validations the first time an app is uploaded.
     * @summary Get Is Free Software
     * @param {string} appId
     * @param {string | null} [license]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet(
      appId: string,
      license?: string | null,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet(
          appId,
          license,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * This endpoint is used by the flathub-hooks scripts to get information about an app to insert into the appstream file and commit metadata.
     * @summary Get Storefront Info
     * @param {string} appId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStorefrontInfoPurchasesStorefrontInfoGet(
      appId: string,
      options?: any,
    ): AxiosPromise<StorefrontInfo> {
      return localVarFp
        .getStorefrontInfoPurchasesStorefrontInfoGet(appId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Generates an update token for a user account. This token allows the user to generate download tokens for apps they already own, but does not grant permission to do anything else. By storing this token, flathub-authenticator is able to update apps without user interaction.
     * @summary Get Update Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUpdateTokenPurchasesGenerateUpdateTokenPost(
      options?: any,
    ): AxiosPromise<GenerateUpdateTokenResponse> {
      return localVarFp
        .getUpdateTokenPurchasesGenerateUpdateTokenPost(options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * PurchaseApi - object-oriented interface
 * @export
 * @class PurchaseApi
 * @extends {BaseAPI}
 */
export class PurchaseApi extends BaseAPI {
  /**
   * Checks whether the logged in user is able to download all of the given app refs.  App IDs can be in the form of full refs, e.g. \"app/org.gnome.Maps/x86_64/stable\", or just the app ID, e.g. \"org.gnome.Maps\".
   * @summary Check Purchases
   * @param {Array<string>} requestBody
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PurchaseApi
   */
  public checkPurchasesPurchasesCheckPurchasesPost(
    requestBody: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return PurchaseApiFp(this.configuration)
      .checkPurchasesPurchasesCheckPurchasesPost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Generates a download token for the given app IDs. App IDs should be in the form of full refs, e.g. \"app/org.gnome.Maps/x86_64/stable\".
   * @summary Get Download Token
   * @param {BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost} bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PurchaseApi
   */
  public getDownloadTokenPurchasesGenerateDownloadTokenPost(
    bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost: BodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
    options?: AxiosRequestConfig,
  ) {
    return PurchaseApiFp(this.configuration)
      .getDownloadTokenPurchasesGenerateDownloadTokenPost(
        bodyGetDownloadTokenPurchasesGenerateDownloadTokenPost,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Gets whether the app is Free Software based on the app ID and license, even if the app is not in the appstream database yet. This is needed in flat-manager-hooks to run validations the first time an app is uploaded.
   * @summary Get Is Free Software
   * @param {string} appId
   * @param {string | null} [license]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PurchaseApi
   */
  public getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet(
    appId: string,
    license?: string | null,
    options?: AxiosRequestConfig,
  ) {
    return PurchaseApiFp(this.configuration)
      .getIsFreeSoftwarePurchasesStorefrontInfoIsFreeSoftwareGet(
        appId,
        license,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * This endpoint is used by the flathub-hooks scripts to get information about an app to insert into the appstream file and commit metadata.
   * @summary Get Storefront Info
   * @param {string} appId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PurchaseApi
   */
  public getStorefrontInfoPurchasesStorefrontInfoGet(
    appId: string,
    options?: AxiosRequestConfig,
  ) {
    return PurchaseApiFp(this.configuration)
      .getStorefrontInfoPurchasesStorefrontInfoGet(appId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Generates an update token for a user account. This token allows the user to generate download tokens for apps they already own, but does not grant permission to do anything else. By storing this token, flathub-authenticator is able to update apps without user interaction.
   * @summary Get Update Token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PurchaseApi
   */
  public getUpdateTokenPurchasesGenerateUpdateTokenPost(
    options?: AxiosRequestConfig,
  ) {
    return PurchaseApiFp(this.configuration)
      .getUpdateTokenPurchasesGenerateUpdateTokenPost(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
