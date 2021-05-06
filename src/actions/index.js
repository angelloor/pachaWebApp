export const actions = {
    cambiarUserLogin: 'CAMBIAR_USER_LOGIN',
    cambiarUsers: 'CAMBIAR_USERS',
    cambiarNews: 'CAMBIAR_NEWS',
    cambiarStoreItem: 'CAMBIAR_STORE_ITEM',
}

export const cambiarUserLogin = payload => ({
    type: actions.cambiarUserLogin,
    payload,
});

export const cambiarUsers = payload => ({
    type: actions.cambiarUsers,
    payload,
});

export const cambiarNews = payload => ({
    type: actions.cambiarNews,
    payload,
});

export const cambiarStoreItem = payload => ({
    type: actions.cambiarStoreItem,
    payload,
});

