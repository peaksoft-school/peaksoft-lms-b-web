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

export const convertDate = (str) => {
   const date = new Date(str)
   const month = `0${date.getMonth() + 1}`.slice(-2)
   const day = `0${date.getDate()}`.slice(-2)
   return [day, month, date.getFullYear()].join('-')
}
