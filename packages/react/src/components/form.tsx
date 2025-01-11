export type FormProps = {}

export function Form() {
  return (
    <div className="py-8 relative">
      <a 
        className="mb-8 inline-flex items-center gap-x-0.5 text-sm font-medium text-secondary hover:text-primary" 
        href="/"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 315 72" 
          className="pointer-events-none absolute top-0 left-0 right-0 mx-auto w-64 select-none transition-opacity peer-data-[interacted=true]:opacity-100 sm:left-16 sm:right-auto sm:mx-0 xl:-left-72 xl:-top-6 xl:mx-0"
        >
          <g strokeLinecap="round" className="opacity-50" stroke="currentColor" strokeWidth="1" fill="none">
            <path d="M72 50c-3 2-11 10-18 11s-17 1-23-3c-6-3-10-8-14-16-3-8-6-27-7-32m62 40c-3 2-11 10-18 11s-17 1-23-3c-6-3-10-8-14-16-3-8-6-27-7-32" strokeDasharray="3 4" />
            <path d="m18 24-8-14m8 14-8-14" />
            <path d="m7 26 3-16M7 26l3-16" />
          </g>
          <g fill="text-black">
            <path d="M92.0004 52.8517C88.734 52.7597 82.1643 54.5445 81.7051 49.7045C82.2244 45.0641 85.4917 40.8334 85.6709 36.2531C88.7787 33.3884 87.7595 39.0805 86.774 40.928C86.3567 43.8113 83.3661 47.1269 84.7779 49.8577C88.4384 52.2298 94.423 47.6524 96.833 52.0638C96.4027 54.4093 93.547 52.441 92.0004 52.8517ZM117.319 42.4251C121.456 41.3467 128.248 46.2608 124.393 50.3041C121.381 53.8324 112.228 53.7254 112.285 48.5752C112.701 44.9113 113.309 44.1938 117.319 42.4251ZM114.78 49.2536C116.64 52.6099 123.789 50.5272 123.106 46.7586C120.459 43.0037 114.448 44.5458 114.78 49.2536ZM130.242 48.991C128.75 45.9256 129.87 52.7896 127.642 52.8254C125.068 52.6705 126.33 49.5625 127.064 48.3081C127.085 44.1724 126.515 39.6086 127.09 35.7016C130.43 36.2969 128.554 41.9138 129.428 44.1847C133.999 42.5861 138.029 37.796 143.216 38.6956C144.149 40.8298 139.015 40.5746 137.674 42.0836C136.19 43.8113 132.218 44.4222 131.896 46.7323C132.456 49.3266 134.917 50.1748 136.755 50.6193C137.976 53.5907 133.902 53.8457 132.723 51.562C131.662 50.9593 130.985 49.9078 130.242 48.991ZM163.276 48.9647C161.393 52.672 154.431 55.1847 153.112 49.7001C152.747 44.9879 159.247 40.9377 162.934 43.817C165.425 46.0797 166.257 50.3012 169.763 51.7749C168.103 55.5856 164.612 50.4709 163.276 48.9647ZM155.292 48.9647C157.156 53.2225 163.043 47.4569 161.7 44.7888C158.889 44.7212 155.907 46.0123 155.292 48.9647ZM202.362 51.7224C201.897 47.9314 203.726 45.2453 198.948 47.0737C196.851 49.0364 195.457 44.9335 198.496 44.2086C203.112 44.0097 202.146 43.8417 202.021 39.2734C204.898 37.5277 203.55 42.607 205.015 43.0817C207.081 43.0775 211.41 41.1662 211.844 43.9221C209.755 45.2156 206.69 44.7017 204.516 45.9181C203.452 48.3021 207.19 52.0507 203.702 53.0356C202.901 52.9748 202.697 52.2594 202.362 51.7224Z"></path>
            <path d="M219.387 46.4958C216.243 47.5337 215.763 51.6177 213.136 52.9829C210.232 51.3014 213.086 47.2739 211.981 44.526C212.728 42.4511 210.406 37.8319 212.664 37.0409C215.072 39.9266 213.619 44.6874 214.476 47.8352C216.245 45.9692 219.923 41.2182 222.04 45.3927C222.971 47.7964 224.237 50.837 223.616 53.298C220.569 53.1977 221.485 47.6717 219.387 46.4958ZM224.801 49.7525C225.362 44.9719 231.592 39.1128 235.884 43.528C238.895 48.1222 231.048 51.5073 228.084 47.9403C224.979 51.1567 230.798 55.1352 234.098 53.8496C236.583 53.8398 239.758 51.8355 241.925 53.2193C241.666 56.1568 237.044 55.1351 234.939 56.0557C230.704 57.0988 224.571 54.8558 224.801 49.7525ZM228.846 46.522C230.481 47.0176 234.393 47.5295 233.941 44.9462C232.085 43.4403 229.932 44.9215 228.846 46.522ZM252.201 44.6134C252.839 42.613 252.13 38.5144 254.854 38.1526C257.128 40.4324 253.211 43.793 254.778 46.6577C255.164 50.6854 260.015 51.0103 261.672 47.6776C263.699 45.0722 266.022 41.6893 264.954 38.3015C267.499 35.7948 267.86 43.4427 266.214 45.075C263.98 49.0668 262.226 52.6309 256.97 52.7465C253.412 51.9424 252.051 47.8824 252.201 44.6134ZM268.252 46.6534C269.466 42.3169 266.531 32.8108 271.562 34.1782C275.729 36.0535 281.706 35.8095 284.378 40.3501C284.708 43.8413 280.066 44.8347 277.734 45.3139C279.385 47.767 284.776 49.3113 283.196 52.7728C280.366 51.6928 278.636 48.4618 275.816 46.9948C274.088 46.0576 270.254 42.9116 273.426 41.5057C275.735 42.5861 279.933 43.8114 281.542 41.0592C280.222 38.4011 276.188 37.7704 273.426 37.356C268.585 36.5019 272.258 40.924 270.747 43.6593C269.543 46.7024 272.066 49.3584 271.089 52.1424C267.718 55.093 268.533 48.1864 268.252 46.6534ZM295.491 52.8516C292.225 52.7596 285.655 54.5443 285.196 49.7044C285.716 45.0639 288.983 40.8333 289.162 36.253C292.27 33.3883 291.251 39.0804 290.265 40.9279C289.848 43.8111 286.857 47.1267 288.269 49.8575C291.929 52.2297 297.914 47.6523 300.324 52.0637C299.899 54.4127 297.027 52.4369 295.491 52.8516ZM305.094 30.6326C308.022 31.6789 305.307 35.9247 305.54 39.5097C305.401 43.1228 304.726 44.2941 305.139 47.8173C305.612 49.2803 304.085 50.8044 302.791 48.328C302.864 46.011 303.7 35.6977 305.094 30.6326Z"></path>
            <path d="M304.078 53.2732C304.762 53.2732 305.316 52.7405 305.316 52.0834C305.316 51.4263 304.762 50.8936 304.078 50.8936C303.395 50.8936 302.841 51.4263 302.841 52.0834C302.841 52.7405 303.395 53.2732 304.078 53.2732Z"></path>
            <path d="M174.385 51.97C173.92 48.1789 175.749 45.4927 170.971 47.3212C168.874 49.284 167.479 45.181 170.519 44.4561C175.134 44.2572 174.169 44.0891 174.044 39.5207C176.921 37.775 175.573 42.8544 177.038 43.3291C179.104 43.3249 183.433 41.4136 183.867 44.1695C181.778 45.4631 178.713 44.9492 176.539 46.1656C175.475 48.5497 179.213 52.2983 175.725 53.2832C174.924 53.2225 174.72 52.507 174.385 51.97Z"></path>
            <path d="M102.575 42.4747C106.713 41.3963 113.504 46.3105 109.649 50.354C106.638 53.8824 97.4838 53.7753 97.5413 48.625C97.9569 44.961 98.5655 44.2435 102.575 42.4747ZM100.036 49.3034C101.896 52.6598 109.046 50.5771 108.362 46.8083C105.716 43.0534 99.7041 44.5955 100.036 49.3034Z"></path>
          </g>
        </svg>

        Back
      </a>

      <form className="w-full lg:w-[25rem]">
        <div className="rounded-lg bg-gray-200 px-px">
          <div className="px-5 py-6">
            <h2 className="text-lg font-medium">Let's build your &lt;SignIn /&gt;</h2>
            <p className="mt-1 text-sm text-secondary">
              The configurations can be changed anytime in the dashboard.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-[0_0_0_1px_rgba(25,28,33,0.04),0_-2px_2px_-1px_rgba(25,28,33,0.02),0_3px_3px_-2px_rgba(25,28,33,0.06),0_3px_5px_-2px_rgba(0,0,0,0.08)]">
            <div className="px-5 py-6">
              <div className="flex flex-col w-full">
                <label className="text-base font-medium">
                  Application name
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}