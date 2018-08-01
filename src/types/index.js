import flags from "./categories/flags"
import people from "./categories/people"
import nature from "./categories/nature"

let obj = {}

Object.assign(obj, 
    people, nature, flags
)

export default obj