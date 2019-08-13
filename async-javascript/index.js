const getData = (cb) => {
  setTimeout(() => {
    cb([1, 2, 3, 4])
  }, 2000)
}

const multiply = (result, cb) => {
  cb(result.map(e => e * 2))
}

const printResult = (result, cb) => {
  console.log(result)
}

console.log('start')
getData((result) => {
  result.map(e => {
    e * 2
  })
})
console.log('end')

const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    // if (sikeres volt a http keres) {
    //   resolve
    // } else {
    //   reject(...)
    // }
    // reject('csak')
    setTimeout(() => {
      resolve([1, 2, 3, 4])
    }, 2000)
  })
}

const result = getDataPromise()
  .then(result => result.map(e => e * 2))
  .then(result => {
    if (result.some(e => e > 10)) {
      return Promise.reject('tul nagyok a szamok')
    }
    return result
  })
  // .then(result => console.log(result))
  .catch(error => console.log(`hiba: ${error}`))


Promise
  .all([result, Promise.resolve(1)])
  .then(r => console.log('promise all: ', r))
console.log(result)

async function main() {
  try {
    const result = await getDataPromise()
    // const updateResult = await updateData(result)
    console.log('az async functionbol', result)
  } catch (error) {
    console.log('hiba', error)
  }
}

main()
console.log('ez mar tenyleg a fajl vege')
