const storages = {
  localStorage: typeof window !== 'undefined' ? localStorage : null,
  sessionStorage: typeof window !== 'undefined' ? sessionStorage : null
}

const getValue = (storage, key) => {
  try {
    return storages[storage].getItem(`comeon-${key}`)
  } catch (e) {
    console.error(`Reading ${key} from ${storage} was failed`)
  }
}

const setValue = (storage, key, value) => {
  try {
    storages[storage].setItem(`comeon-${key}`, value)
  } catch (e) {
    console.error(`Setting ${key} for ${storage} was failed`)
  }
}

const removeValue = (storage, key) => {
  try {
    storages[storage].removeItem(`comeon-${key}`, value)
  } catch (e) {
    console.error(`Removing ${key} from ${storage} was failed`)
  }
}

export {
  getValue,
  setValue,
  removeValue
}
