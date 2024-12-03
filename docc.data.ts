import * as fs from 'fs';

const baseURL =
  process.env.ENVIRONMENT=== 'production'
    ? 'https://packagedsl.com'
    : 'http://localhost:3000'
    
const modules = fs.readdirSync("public/swift-docc/data/documentation").filter( (name) => {
  const lowerCase = name.toLocaleLowerCase()
  return lowerCase.endsWith("json")
}).map((name) => {

  const json = fs.readFileSync("public/swift-docc/data/documentation/" + name)
  const data = JSON.parse(json)
  const text = data.metadata.title
  const lowerCase = name.split(".")[0].toLocaleLowerCase()
  return { 
    text: text, 
    link: `${baseURL}/swift-docc/documentation/${lowerCase}/`, 
    target: "_self"
  }
})
// example.data.js
export default {
    load() {
      return modules
    }
  }