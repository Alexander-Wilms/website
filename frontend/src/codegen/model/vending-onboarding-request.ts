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

/**
 * A request to begin/continue the onboarding process for a user.  Any onboarding operation request a \'return\' URL which we will tell Stripe to send us back to.
 * @export
 * @interface VendingOnboardingRequest
 */
export interface VendingOnboardingRequest {
  /**
   *
   * @type {string}
   * @memberof VendingOnboardingRequest
   */
  return_url: string
}
