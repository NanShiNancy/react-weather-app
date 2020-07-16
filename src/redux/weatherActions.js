

export const CHANGE_LIMIT = 'CHANGE_LIMIT';


export const changeLimitAction = limit =>({
    limit,
    type: CHANGE_LIMIT,
});