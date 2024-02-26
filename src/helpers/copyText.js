import copy from "copy-to-clipboard";

/**
 * It generate an Promise that resolve when the str has copied into the clipboard
 *
 * @export doCopy
 * @param {*} str
 * @returns Promise
 */
export function doCopy(str) {
  return new Promise((resolve, reject) => {
    try {
      copy(str);
      resolve(true);
    } catch (e) {
      reject("Could not copy");
    }
  });
}
