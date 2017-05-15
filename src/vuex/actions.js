export const displayArticles = ({commit},type)=> {
    commit('DISPLAY_ARTICLES', type)
}

export const changeUserNameAction = ({commit},username )=> {
    commit('CHANGE_USERNAME',username)
}