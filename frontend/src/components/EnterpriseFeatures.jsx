import React from "react";

const EnterpriseFeatures = () => {
  return (
    <div className="mt-8 w-[80%] mx-auto sm:mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-12 md:gap-6 mb-4 sm:mb-12 md:mb-6">
      {/* Self-host for compliance */}
      <div className="not-prose p-4 sm:p-10 flex flex-col sm:flex-row md:flex-col items-start gap-6 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="dark:text-green-400 text-green-600">
            <rect width="64" height="64" fill="url(#security-a)" fillOpacity="0.4" rx="16"></rect>
            <rect width="63" height="63" x="0.5" y="0.5" stroke="url(#security-b)" strokeOpacity="0.5" rx="15.5"></rect>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M45.077 42c.345-1.341.607-3.045.944-5.241l.452-2.939c.53-3.446.794-5.169.143-6.696-.652-1.527-2.097-2.572-4.988-4.662l-2.16-1.562C35.872 18.3 34.075 17 32 17s-3.873 1.3-7.468 3.9l-2.16 1.562c-2.891 2.09-4.336 3.135-4.988 4.662-.651 1.527-.386 3.25.143 6.696l.452 2.939c.337 2.197.599 3.9.944 5.241M32 43h4m-8 0h1m3-8h4m-8 0h1m9 4H26m12 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H26a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m12 0a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H26a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2"></path>
            <defs>
              <radialGradient id="security-a" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
              <radialGradient id="security-b" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            Self-host for compliance
          </div>
          <div className="text-base dark:text-gray-400 text-gray-600">
            Deploy to your own infrastructure without worrying about regulations, performance, and stability. Maintain your current security best practices with no compromises.
          </div>
        </div>
      </div>

      {/* Identity Provider */}
      <div className="not-prose p-4 sm:p-10 flex flex-col sm:flex-row md:flex-col items-start gap-6 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="dark:text-cyan-400 text-cyan-600">
            <rect width="64" height="64" fill="url(#self-hosted-a)" fillOpacity="0.4" rx="16"></rect>
            <rect width="63" height="63" x="0.5" y="0.5" stroke="url(#self-hosted-b)" strokeOpacity="0.5" rx="15.5"></rect>
            <path fill="currentColor" d="M27.498 18a1 1 0 1 0-.046-2l.046 2Zm-8.372 1.17.706.71-.706-.71Zm-3.125 6.78a1 1 0 0 0 1.998.1L16 25.95ZM36.547 16a1 1 0 1 0-.045 2l.045-2Zm8.327 3.17.706-.707-.706.708ZM46 26.05a1 1 0 0 0 1.998-.1l-1.998.1ZM36.502 46a1 1 0 1 0 .045 2l-.045-2Zm8.372-1.17.706.707-.706-.708Zm3.125-6.78a1 1 0 0 0-1.998-.1l1.998.1ZM27.452 48a1 1 0 1 0 .046-2l-.046 2Zm-8.326-3.17.706-.71-.706.71ZM18 37.95a1 1 0 0 0-1.998.1l1.998-.1Zm6.528.86a1 1 0 0 0 1.446 1.38l-1.446-1.38Zm13.488 1.368a1 1 0 1 0 1.47-1.356l-1.47 1.356ZM27.452 16c-4.172.095-7.035.472-9.032 2.463l1.412 1.416c1.363-1.358 3.419-1.783 7.666-1.88L27.452 16Zm-9.032 2.463c-1.757 1.75-2.253 4.155-2.419 7.487l1.998.1c.163-3.276.65-4.991 1.833-6.17l-1.412-1.417ZM36.502 18c4.247.096 6.303.521 7.666 1.88l1.412-1.417c-1.998-1.99-4.86-2.368-9.032-2.463l-.046 2Zm7.666 1.88c1.184 1.179 1.67 2.894 1.833 6.17l1.998-.1c-.166-3.332-.662-5.736-2.42-7.487l-1.411 1.416ZM36.548 48c4.172-.095 7.034-.472 9.032-2.463l-1.412-1.416c-1.363 1.358-3.419 1.783-7.666 1.88L36.547 48Zm9.032-2.463c1.757-1.75 2.253-4.155 2.419-7.487L46 37.95c-.163 3.276-.65 4.991-1.833 6.17l1.412 1.417ZM27.498 46c-4.247-.096-6.303-.52-7.666-1.88l-1.412 1.417c1.997 1.99 4.86 2.368 9.032 2.463l.046-2Zm-7.666-1.88c-1.184-1.179-1.67-2.894-1.833-6.17l-1.998.1c.166 3.332.662 5.736 2.42 7.487l1.411-1.416Zm6.141-3.93c3.123-3.27 8.92-3.399 12.042-.012l1.47-1.356c-3.949-4.285-11.086-4.069-14.958-.013l1.446 1.382Zm8.77-11.94A2.753 2.753 0 0 1 31.987 31v2a4.753 4.753 0 0 0 4.756-4.75h-2ZM31.987 31a2.753 2.753 0 0 1-2.755-2.75h-2c0 2.625 2.13 4.75 4.755 4.75v-2Zm-2.755-2.75a2.753 2.753 0 0 1 2.755-2.75v-2a4.753 4.753 0 0 0-4.755 4.75h2Zm2.755-2.75a2.753 2.753 0 0 1 2.756 2.75h2c0-2.625-2.13-4.75-4.756-4.75v2Z"></path>
            <defs>
              <radialGradient id="self-hosted-a" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
              <radialGradient id="self-hosted-b" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            Leverage the power of your existing Identity Provider
          </div>
          <div className="text-base dark:text-gray-400 text-gray-600">
            Native support for Okta, Azure AD, Amazon Cognito &amp; Google Cloud Identity.
          </div>
        </div>
      </div>

      {/* Access Control */}
      <div className="not-prose p-4 sm:p-10 flex flex-col sm:flex-row md:flex-col items-start gap-6 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="dark:text-blue-400 text-blue-600">
            <rect width="64" height="64" fill="url(#access-control-a)" fillOpacity="0.4" rx="16"></rect>
            <rect width="63" height="63" x="0.5" y="0.5" stroke="url(#access-control-b)" strokeOpacity="0.5" rx="15.5"></rect>
            <path fill="currentColor" d="M20.75 30.997h1a1 1 0 0 0-.5-.866l-.5.866Zm.228 12.158.924-.382-.924.382Zm1.53 1.852-.708.708.707-.708ZM24.5 47l-.707.707a1 1 0 0 0 1.414 0L24.5 47Zm3.162-3.162-.707-.708.707.708Zm.28-.298.794.608-.794-.608Zm.295-.713-.991-.132.99.132Zm.004-.74-.994.109.994-.109Zm-.2-.602-.86.51.86-.51Zm-.192-.27-.8.6.8-.6ZM26 38.75l-.8-.6a1 1 0 0 0 0 1.2l.8-.6Zm1.05-1.4.8.6-.8-.6Zm1.046-1.651.949.316-.949-.316Zm.154-4.702-.5-.866a1 1 0 0 0-.5.866h1ZM24.5 23.5a1 1 0 1 0 0 2v-2Zm.014 2a1 1 0 1 0 0-2v2Zm20.29-6.304.706-.707-.707.707Zm0 25.607.706.707-.707-.707ZM32 46a1 1 0 1 0 0 2v-2Zm3.008-29.992a1 1 0 1 0-.017 2l.017-2ZM24.5 16a8.5 8.5 0 0 0-8.5 8.5h2a6.5 6.5 0 0 1 6.5-6.5v-2ZM16 24.5a8.497 8.497 0 0 0 4.25 7.362l1-1.731A6.497 6.497 0 0 1 18 24.5h-2Zm3.75 6.497v9.768h2v-9.768h-2Zm0 9.768c0 1.144-.018 1.995.305 2.773l1.847-.765c-.134-.325-.152-.7-.152-2.008h-2Zm.305 2.773c.322.778.936 1.367 1.745 2.177l1.415-1.415c-.925-.925-1.178-1.202-1.313-1.527l-1.848.765Zm1.745 2.177 1.993 1.992 1.414-1.414-1.992-1.993-1.415 1.415Zm3.407 1.992 3.162-3.162-1.414-1.414-3.162 3.162 1.414 1.414Zm3.162-3.162c.128-.128.257-.254.367-.398l-1.588-1.215a2.936 2.936 0 0 1-.193.198l1.414 1.415Zm.367-.398a2.5 2.5 0 0 0 .492-1.188l-1.982-.264a.5.5 0 0 1-.099.237l1.589 1.215Zm.492-1.188c.024-.18.022-.36.022-.54h-2c0 .233-.002.258-.004.276l1.982.264Zm.022-.54c0-.146.001-.292-.015-.44l-1.988.217c.002.014.003.035.003.223h2Zm-.015-.44a2.5 2.5 0 0 0-.334-1.003l-1.72 1.019a.5.5 0 0 1 .066.2l1.988-.216Zm-.334-1.003c-.076-.128-.165-.245-.252-.361l-1.6 1.2c.113.15.124.168.131.18l1.72-1.02Zm-.252-.361L26.8 38.15l-1.6 1.2 1.849 2.465 1.6-1.2ZM26.8 39.35l1.05-1.4-1.6-1.2-1.05 1.4 1.6 1.2Zm1.05-1.4c.556-.741.978-1.284 1.195-1.935l-1.898-.633c-.09.273-.263.523-.897 1.368l1.6 1.2Zm1.195-1.935c.217-.651.205-1.338.205-2.265h-2c0 1.056-.012 1.36-.103 1.633l1.898.632Zm.205-2.265v-2.753h-2v2.753h2Zm-.5-1.888A8.497 8.497 0 0 0 33 24.5h-2a6.497 6.497 0 0 1-3.25 5.631l1 1.731ZM33 24.5a8.5 8.5 0 0 0-8.5-8.5v2a6.5 6.5 0 0 1 6.5 6.5h2Zm-8.5 1h.014v-2H24.5v2Zm19.596-5.596c.882.881 1.379 2.068 1.638 4 .264 1.96.266 4.532.266 8.096h2c0-3.508.002-6.239-.283-8.363-.29-2.153-.891-3.832-2.206-5.148l-1.415 1.415ZM46 32c0 3.563-.002 6.136-.266 8.096-.26 1.932-.756 3.118-1.638 4l1.415 1.414c1.315-1.315 1.916-2.994 2.206-5.148.285-2.124.283-4.855.283-8.362h-2Zm-1.904 12.096c-.881.882-2.068 1.378-4 1.638-1.96.264-4.532.266-8.096.266v2c3.507 0 6.238.002 8.363-.284 2.153-.29 3.832-.89 5.148-2.206l-1.415-1.414Zm-9.104-26.088c2.563.021 4.463.105 5.94.394 1.448.283 2.415.752 3.164 1.502l1.415-1.415c-1.112-1.111-2.487-1.716-4.195-2.05-1.68-.33-3.751-.41-6.308-.431l-.017 2Z"></path>
            <defs>
              <radialGradient id="access-control-a" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
              <radialGradient id="access-control-b" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            Achieve fine-grained access control
          </div>
          <div className="text-base dark:text-gray-400 text-gray-600">
            Out-of-the-box support for widely accepted authorization models including ACL, RBAC &amp; ABAC.
          </div>
        </div>
      </div>

      {/* Black Box */}
      <div className="not-prose p-4 sm:p-10 flex flex-col sm:flex-row md:flex-col items-start gap-6 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="dark:text-purple-400 text-purple-600">
            <rect width="64" height="64" fill="url(#black-box-a)" fillOpacity="0.4" rx="16"></rect>
            <rect width="63" height="63" x="0.5" y="0.5" stroke="url(#black-box-b)" strokeOpacity="0.5" rx="15.5"></rect>
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M30 47h4M17 32c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 5.928-3.438 11.052-8.43 13.488a.247.247 0 0 1-.331-.119l-3.595-7.704a.258.258 0 0 1 .118-.337 6 6 0 1 0-5.524 0 .258.258 0 0 1 .118.337l-3.595 7.704a.247.247 0 0 1-.332.12C20.44 43.051 17 37.927 17 32Z"></path>
            <defs>
              <radialGradient id="black-box-a" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
              <radialGradient id="black-box-b" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            Unlock the black box
          </div>
          <div className="text-base dark:text-gray-400 text-gray-600">
            Implement an open-source solution with an open architecture. Save yourself from the hassle of adding another proprietary component to your stack.
          </div>
        </div>
      </div>

      {/* Monitor */}
      <div className="not-prose p-4 sm:p-10 flex flex-col sm:flex-row md:flex-col items-start gap-6 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-red-600">
            <rect width="64" height="64" fill="url(#monitor-a)" fillOpacity="0.3" rx="16"></rect>
            <rect width="63" height="63" x="0.5" y="0.5" stroke="url(#monitor-b)" strokeOpacity="0.5" rx="15.5"></rect>
            <path fill="currentColor" d="M22.316 40.684a1 1 0 1 0 2 0h-2Zm2-4.737a1 1 0 1 0-2 0h2Zm5.895 4.737a1 1 0 1 0 2 0h-2Zm2-14.21a1 1 0 1 0-2 0h2Zm5.894 14.21a1 1 0 1 0 2 0h-2Zm2-6.316a1 1 0 0 0-2 0h2Zm7.888-3.96a1 1 0 0 0-2 .026l2-.026Zm-3.19 14.395.708.708-.708-.708Zm-25.606 0-.707.708.707-.708Zm0-25.606-.707-.707.707.707ZM32 17v1-1Zm1.579 1a1 1 0 1 0 0-2v2Zm-9.263 22.684v-4.737h-2v4.737h2Zm7.895 0v-14.21h-2v14.21h2Zm7.894 0v-6.316h-2v6.316h2ZM46 21.737a3.737 3.737 0 0 1-3.737 3.737v2A5.737 5.737 0 0 0 48 21.737h-2Zm-3.737 3.737a3.737 3.737 0 0 1-3.737-3.737h-2a5.737 5.737 0 0 0 5.737 5.737v-2Zm-3.737-3.737A3.737 3.737 0 0 1 42.263 18v-2a5.737 5.737 0 0 0-5.737 5.737h2ZM42.263 18A3.737 3.737 0 0 1 46 21.737h2A5.737 5.737 0 0 0 42.263 16v2Zm4.73 12.421-1 .013v.024l.001.073A120.866 120.866 0 0 1 46 32h2c0-.524-.002-.92-.004-1.187l-.002-.302v-.076l-.001-.02v-.007l-1 .013ZM46 32c0 3.564-.002 6.136-.266 8.096-.26 1.932-.756 3.119-1.638 4l1.415 1.415c1.315-1.316 1.916-2.995 2.206-5.148.285-2.125.283-4.856.283-8.363h-2Zm-1.904 12.096c-.881.882-2.068 1.379-4 1.638-1.96.264-4.532.266-8.096.266v2c3.507 0 6.238.002 8.363-.283 2.153-.29 3.832-.891 5.148-2.206l-1.415-1.415ZM32 46c-3.564 0-6.136-.002-8.096-.266-1.932-.26-3.119-.756-4-1.638l-1.414 1.415c1.315 1.315 2.994 1.916 5.147 2.206 2.125.285 4.856.283 8.363.283v-2Zm-12.096-1.904c-.882-.881-1.379-2.068-1.638-4C18.002 38.136 18 35.564 18 32h-2c0 3.507-.002 6.238.284 8.363.289 2.153.89 3.832 2.206 5.148l1.414-1.415ZM18 32c0-3.564.002-6.136.266-8.096.26-1.932.756-3.119 1.638-4L18.49 18.49c-1.316 1.315-1.917 2.994-2.206 5.147C15.998 25.762 16 28.493 16 32h2Zm1.904-12.096c.881-.882 2.068-1.379 4-1.638C25.864 18.002 28.436 18 32 18v-2c-3.507 0-6.238-.002-8.363.284-2.153.289-3.832.89-5.147 2.206l1.414 1.414ZM32 18h1.579v-2H32v2Z"></path>
            <defs>
              <radialGradient id="monitor-a" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
              <radialGradient id="monitor-b" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            Effortlessly monitor your application
          </div>
          <div className="text-base dark:text-gray-400 text-gray-600">
            Ready-made providers and components for audit logging and usage analytics.
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="not-prose p-4 sm:p-10 flex flex-col sm:flex-row md:flex-col items-start gap-6 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="dark:text-yellow-400 text-orange-600">
            <rect width="64" height="64" fill="url(#support-a)" fillOpacity="0.4" rx="16"></rect>
            <rect width="63" height="63" x="0.5" y="0.5" stroke="url(#support-b)" strokeOpacity="0.5" rx="15.5"></rect>
            <path fill="currentColor" d="M18.818 42.59a1 1 0 0 0 1.134-1.648l-1.134 1.647Zm-.06-1.347.707-.708-.708.708Zm0-21.486-.708-.707.707.707Zm26.485 0-.708.707.708-.707Zm0 21.486-.708-.708.708.708Zm-1.195-.301a1 1 0 1 0 1.134 1.647l-1.134-1.647ZM27.03 39.889l.52.854-.52-.854Zm-2.626 4.42-.698.717.698-.717Zm15.194 0 .698.717-.698-.717Zm-2.626-4.42-.52.854.52-.854Zm-17.02 1.053a3.464 3.464 0 0 1-.486-.407L18.05 41.95c.238.237.493.45.768.64l1.134-1.648Zm-.487-.407c-.661-.661-1.048-1.562-1.253-3.085C18.002 35.9 18 33.857 18 31h-2c0 2.8-.002 5 .229 6.717.234 1.745.726 3.137 1.821 4.233l1.414-1.415ZM18 31c0-2.85.002-5.155.213-6.968.214-1.836.623-2.94 1.252-3.567L18.05 19.05c-1.13 1.13-1.598 2.82-1.824 4.75C16 25.755 16 28.194 16 31h2Zm1.465-10.535c.661-.662 1.562-1.05 3.085-1.254C24.1 19.002 26.143 19 29 19v-2c-2.8 0-5-.002-6.717.229-1.745.234-3.137.726-4.233 1.821l1.415 1.415ZM29 19h6v-2h-6v2Zm6 0c2.857 0 4.899.002 6.45.21 1.523.206 2.424.593 3.085 1.254l1.415-1.414c-1.096-1.095-2.488-1.587-4.233-1.821C40 16.998 37.8 17 35 17v2Zm9.535 1.465c.629.628 1.038 1.73 1.252 3.567C46 25.845 46 28.15 46 31h2c0-2.807.002-5.245-.226-7.2-.226-1.93-.695-3.62-1.824-4.75l-1.415 1.415ZM46 31c0 2.857-.002 4.899-.21 6.45-.206 1.523-.593 2.424-1.255 3.085l1.415 1.415c1.095-1.096 1.587-2.488 1.821-4.233C48.002 36 48 33.8 48 31h-2Zm-1.465 9.535a3.466 3.466 0 0 1-.487.407l1.134 1.647c.275-.19.53-.402.768-.64l-1.415-1.413Zm-18.026-1.5c-.54.329-1.897 1.03-2.763 1.897-.445.446-.9 1.063-.983 1.84-.09.836.273 1.601.942 2.254l1.396-1.433c-.366-.356-.355-.55-.35-.608.013-.118.102-.331.41-.64.64-.641 1.632-1.141 2.389-1.602l-1.04-1.708Zm-2.804 5.99C24.805 46.098 26.17 47 27.958 47v-2c-1.044 0-1.933-.507-2.857-1.407l-1.396 1.433ZM27.958 47h8.084v-2h-8.084v2Zm8.084 0c1.788 0 3.153-.903 4.253-1.974l-1.396-1.433c-.924.9-1.813 1.407-2.857 1.407v2Zm4.253-1.974c.67-.653 1.031-1.418.942-2.254-.083-.777-.538-1.394-.983-1.84-.866-.867-2.223-1.568-2.763-1.897l-1.04 1.708c.756.46 1.747.96 2.388 1.602.308.309.397.522.41.64.005.059.016.252-.35.608l1.396 1.433Zm-2.804-5.991a10.588 10.588 0 0 0-10.982 0l1.04 1.708a8.588 8.588 0 0 1 8.901 0l1.04-1.708ZM34.75 31A2.75 2.75 0 0 1 32 33.75v2A4.75 4.75 0 0 0 36.75 31h-2ZM32 33.75A2.75 2.75 0 0 1 29.25 31h-2A4.75 4.75 0 0 0 32 35.75v-2ZM29.25 31A2.75 2.75 0 0 1 32 28.25v-2A4.75 4.75 0 0 0 27.25 31h2ZM32 28.25A2.75 2.75 0 0 1 34.75 31h2A4.75 4.75 0 0 0 32 26.25v2Z"></path>
            <defs>
              <radialGradient id="support-a" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
              <radialGradient id="support-b" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(90.5097)" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor"></stop>
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            Get supported by the experts
          </div>
          <div className="text-base dark:text-gray-400 text-gray-600">
            Enroll in plans that provide priority support, trainings and consulting.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          className="select-none sm:max-w-[293px] mx-auto group relative no-underline rounded-full flex items-center justify-center gap-2 py-3 pr-4 pl-6 text-base font-semibold dark:text-cyan-400 text-blue-600 dark:bg-cyan-400/10 bg-blue-600/10 overflow-hidden hover:no-underline transition-all duration-200" 
          href="/enterprise/"
        >
          Check out Enterprise Edition
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path 
              fill="currentColor" 
              d="M10.646 14.146a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L12.793 12l-2.147 2.146Z"
            />
            <path 
              fill="currentColor" 
              fillRule="evenodd" 
              d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z" 
              clipRule="evenodd"
            />
          </svg>
          
          {/* Hover effect background */}
          <div className="select-none rounded-3xl absolute left-0 top-0 w-full h-full scale-[2] origin-center transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100 pointer-events-none bg-gradient-to-r from-blue-500/20 to-cyan-400/20 dark:from-cyan-400/20 dark:to-blue-500/20" />
        </a>
      </div>
    </div>
  );
};

export default EnterpriseFeatures;
