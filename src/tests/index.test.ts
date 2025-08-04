import request from 'supertest';
import App from '@/app';
import { generateToken } from '@/utils/jwt';

const app = new App();
const expressApp = app.getApp();

const testingToken =  generateToken({id: 1, role: 'admin'});

describe('API Endpoints test case', () => {
    // Test get endpoint
    // Api for Getting question list and search question

    // test('GET /api/question should return question list', async() => {
    //     const response = await request(expressApp).get('/api/question');

    //     expect(response.status).toBe(200);
    //     console.log(response.body);
    //     expect(response.body.data.data[0]).toHaveProperty('question_id');
    //     expect(response.body.data.data[0].creator.username).toBe('admin1')

    // })

    // test('GET /api/question should also be able to search specific question', async() => {
    //     const response = await request(expressApp).get('/api/question').query({search: 'error'})
        
    //     expect(response.body.data.data[0]).toHaveProperty('question_id')
    //     expect(response.body.data.data[0].title).toBe('node modules error')
    // })

    test('GET /api/auth should return error with status of 401', async() => {
        const response = await request(expressApp).get('/api/auth');
        expect(response.status).toBe(401);
    })

    test('GET /api/auth should return success with status of 200 with valid token', async() => {
        const successResponse = await request(expressApp).get('/api/auth').set('Cookie', [`token=${testingToken}`]);
        expect(successResponse.status).toBe(200)
    })

    test('GET /api/auth should return error with status of 401 with invalid token', async() => {
        const errorResponse = await request(expressApp).get('/api/auth').set('Cookie', [`token=thisisinvalidtoken`])
    })

    test('GET /api/question/details/:id should return a spesific question with its details', async() => {
        const id = 3
        const response = await request(expressApp).get(`/api/question/details/${id}`);

        expect(response.status).toBe(200);
        expect(response.body.data).toHaveProperty('attachment');
        expect(response.body.data).toHaveProperty('question_id');
        expect(response.body.data).toHaveProperty('creator_id');

    })

    test('POST /api/question/comment should able to post comment on a question', async() => {
        const response = await request(expressApp).post('/api/question/comment').send({
            'question_id': 3,
            'comment': 'This problem remains unsolved'
        }).set('Cookie', [`token=${testingToken}`])

        expect(response.status).toBe(201)
        expect(response.body.data).toEqual({})
    })

    test('POST /api/question/comment should return error if token is not provided or question id is not provided', async() => {
        const errResponse = await request(expressApp).post('/api/question/comment').send({
            'comment': 'This problem remains unsolved'
        }).set('Cookie', [`token=${testingToken}`])

        expect(errResponse.status).toBe(406);

        const errResponse2 = await request(expressApp).post('/api/question/comment').send({
            'question_id': 3,
            'comment': 'This problem remains unsolved'
        })
        expect(errResponse2.status).toBe(401);
    })

    test('POST /api/question/comment should reject if user tries to comment on both question and answer at the same time', async() => {
        const errResponse = await request(expressApp).post('/api/question/comment').send({
            'question_id':3,
            'answer_id':3,
            'comment': 'This problem remains unsolved'
        }).set('Cookie', [`token=${testingToken}`])

        expect(errResponse.status).toBe(400);
    })

    // test('GET /api/profile should return user profile', async() => {
    //     const response = await request(expressApp).get('/api/profile').set('Cookie', [`token=${testingToken}`]);
    //     console.log(response.body);
    //     expect(response.status).toBe(200);
    //     expect(response.body.data).toHaveProperty('user_id');
    //     expect(response.body.data).toHaveProperty('email');
    //     expect(response.body.data).toHaveProperty('username');
    //     expect(response.body.data).toHaveProperty('first_name');
    //     expect(response.body.data).toHaveProperty('last_name');
    //     expect(response.body.data).toHaveProperty('role');
    //     expect(response.body.data.division).toBeNull();
    //     expect(response.body.data.profile_picture).toBeNull();

    // })

    test('GET /pi/admin/divisions should return all divisions', async() => {
        const response = await request(expressApp).get('/api/admin/divisions').set('Cookie', [`token=${testingToken}`]);

        console.log(response.body)
    })

    test('GET /api/profile/questions should return user questions', async() => {
        const response = await request(expressApp).get('/api/profile/questions').set('Cookie', [`token=${testingToken}`]);
        expect(response.status).toBe(200);

        console.log('GET /api/profile/questions response:', response.body);
    })

    test('GET /api/profile/answers should return user answers', async() => {
        const response = await request(expressApp).get('/api/profile/answers').set('Cookie', [`token=${testingToken}`]);
        expect(response.status).toBe(200);

        console.log('GET /api/profile/answers response:', response.body);
    })

    test('GET /api/profile/saved should return user saved questions', async () => {
        const response = await request(expressApp).get('/api/profile/saved').set('Cookie', [`token=${testingToken}`]);
        expect(response.status).toBe(200);

        console.log('GET /api/profile/saved response:', response.body);
    })

    test('POST /api/question/save should save a question', async () => {
        const response = await request(expressApp).post('/api/question/save').send({
            question_id: 4,
            save: false,
            unsave: true
        }).set('Cookie', [`token=${testingToken}`]);

        expect(response.status).toBe(200);
        expect(response.body.data).toEqual({});
    })

    test('GET /api/question/like/status should return like status of a question', async () => {
        const response = await request(expressApp).get('/api/question/3/like/status').set('Cookie', [`token=${testingToken}`]);
        console.log('GET /api/question/like/status response:', response.body);
        console.log('GET /api/question/like/status response on answer:', response.body.answers);
        expect(response.status).toBe(200);
       
    })

    test('GET /api/admin/questions/archive should return archived questions', async () => {
        const response = await request(expressApp).get('/api/admin/questions/archive').set('Cookie', [`token=${testingToken}`]);
        expect(response.status).toBe(200);
        console.log('GET /api/admin/questions/archive response:', response.body);
    })

    test('GET /api/question/:question_id/edit should return question data to be edited', async () => {
        const response = await request(expressApp).get('/api/question/5/edit').set('Cookie', [`token=${testingToken}`]);
        expect(response.status).toBe(200);
        // expect(response.body.data).toEqual({});
        console.log('GET /api/question/:question_id/edit response:', response.body);
        console.log('GET /api/question/:question_id/edit response:', response.body.attachment);
        console.log('GET /api/question/:question_id/edit response:', response.body.tags);
    })

    // test('GET /api/answer/edit/data should return answer data to be edited', async() => {
    //     const response = await request(expressApp).get('api/answer/edit/data').set('Cookie', [`token=${testingToken}`]);
    //     expect(response.status).toBe(200)
    //     console.log(response.body)
    // })

})