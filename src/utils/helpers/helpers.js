export const getFromLocalStorage = (key) => {
   return JSON.parse(localStorage.getItem(key))
}

export const setLocalStorage = (key, data) => {
   const json = JSON.stringify(data)
   localStorage.setItem(key, json)
}

export const removeLocalStorage = (key) => {
   localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
   localStorage.clear()
}

export const search = (a, b) => {
   const result = []
   for (let i = 0; i < a.length; i += 1) {
      if (b.indexOf(a[i]) === -1) {
         result.push(a[i])
      }
   }
   return result
}
