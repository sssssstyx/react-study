import { mock } from '../config';

mock.mock('user/login','post',() => {
    return {
        status: true,
        username: 'root',
        role: 'Admin'
    }
})