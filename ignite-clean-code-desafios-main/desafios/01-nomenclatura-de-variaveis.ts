// Desafio: Nomenclatura de variáveis
// Os comentários são as linhas de código originais

// const list = [
const categoriesList = [
  {
    title: 'User',
    // followers: 5
    minFollowersRequired: 5
  },
  {
    title: 'Friendly',
    // followers: 50,
    minFollowersRequired: 50,
  },
  {
    title: 'Famous',
    // followers: 500,
    minFollowersRequired: 500,
  },
  {
    title: 'Super Star',
    // followers: 1000,
    minFollowersRequired: 1000,
  },
]

// export default async function getData(req, res) {
export default async function getGithubUserCategory(req, res) {
  // const github = String(req.query.username)
  const githubUsername = String(req.query.username)

  // if (!github) {
  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  // const response = await fetch(`https://api.github.com/users/${github}`);
  const response = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (response.status === 404) {
    return res.status(400).json({
      // message: `User with username "${github}" not found`
      message: `User with username "${githubUsername}" not found`
    })
  }

  // const data = await response.json()
  const userData = await response.json()

  // const orderList = list.sort((a, b) =>  b.followers - a.followers); 
  const orderedCategoriesList = categoriesList.sort((orderA, orderB) =>  orderB.minFollowersRequired - orderA.minFollowersRequired); 

  // const category = orderList.find(i => data.followers > i.followers)
  const userCategory = orderedCategoriesList.find(category => userData.followers > category.minFollowersRequired)

  const result = {
    // github,
    githubUsername,
    // category: category.title
    category: userCategory.title
  }

  return result
}

// getData({ query: {
getGithubUserCategory({ query: {
  // username: 'josepholiveira'
  username: 'guissimatheus'
}}, {})