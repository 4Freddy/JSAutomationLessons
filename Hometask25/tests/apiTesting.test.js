const axios = require('axios');
const validator = require('jsonschema');
const loginSchema = require('../data/login.schema.v1.json');
const checkZipCodeSchema = require('../data/checkZipCode.schema.v1.json');
const getStoreSchema = require('../data/getStore.schema.v1.json');
const profileInfoSchema = require('../data/profileInfo.schema.v1.json');
const mainURL = 'http://api-legacy.buggy.ca';
const apiVersion = '/v2.0';

describe('Api tests', function(){
    describe('login', function(){
        let response ;
        beforeAll(async() => {
            response = await axios.post(mainURL+apiVersion+'/user/login', {
                login: '4freddy@mail.ru',
                password: 'password2',
                isAnonymous:'false',
                api_lang:'en',
                api_key:'1820EC2C682E5F2B473D25A9EFA731DC',
                app_ver:'3.2'
            }, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
        });
        test('status code should be 200', async() =>{
            expect(response.status).toEqual(200);
         });
        test('json schema shoul be valid', async()=>{
            const result = await validator.validate(response.data, loginSchema);
            expect(result.valid).toEqual(true);
        });
    });

    describe('check zip code', function(){
        let response ;
        beforeAll(async() => {
            response = await axios.post(mainURL+apiVersion+'/user/check_zip', {
                zip: 'M5J 2T6',
                street: '200 Bay St., Toronto, ON M5J 2T6',
                isAnonymous:'true',
                api_lang:'en',
                api_key:'1820EC2C682E5F2B473D25A9EFA731DC',
                app_ver:'3.2'
            }, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
        });
        test('status code should be 200', async() =>{
            expect(response.status).toEqual(200);
         });
        test('json schema shoul be valid', async()=>{
            const result = await validator.validate(response.data, checkZipCodeSchema);
            expect(result.valid).toEqual(true);
        });
    });

    describe('get store', function(){
        let response ;
        beforeAll(async() => {
            response = await axios.post(mainURL+apiVersion+'/store/get_store', {
                store_id: '169',
                full_depts: '200 Bay St., Toronto, ON M5J 2T6',
                is_changing_current_store: 'true',
                user_key: 'Ug4DBAEBOxQGUwdUVgFVVVkFVwZSBFMBVFJSCgxaUF9WVFcGAVJQ',
                api_lang:'en',
                device_token:'cVbRH39gw0Gmly5toptdYn:APA91bFdHKEqWKoBwufiPuPp6OFsqEi4SoqwTMucC3gcQROasBEIDiRGf9b22CbOOOUL3IxRQ7pjQS8SO54pkJK0c1I83Bj0kC-NO8cl1H9LJIvzbHxrSG5_ojQcy8gCpZd9x0s3SnpS',
                api_key:'1820EC2C682E5F2B473D25A9EFA731DC',
                app_ver:'3.2'
            }, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
        });
        test('status code should be 200', async() =>{
            expect(response.status).toEqual(200);
         });
        test('json schema shoul be valid', async()=>{
            const result = await validator.validate(response.data, getStoreSchema);
            expect(result.valid).toEqual(true);
        });
    });

    describe('profile info', function(){
        let response ;
        beforeAll(async() => {
            response = await axios.post(mainURL+apiVersion+'/user/profile_info', {
                user_key: 'Ug4DBAEBOxQGUwdUVgFVVVkFVwZSBFMBVFJSCgxaUF9WVFcGAVJQ',
                api_lang:'en',
                device_token:'cVbRH39gw0Gmly5toptdYn:APA91bFdHKEqWKoBwufiPuPp6OFsqEi4SoqwTMucC3gcQROasBEIDiRGf9b22CbOOOUL3IxRQ7pjQS8SO54pkJK0c1I83Bj0kC-NO8cl1H9LJIvzbHxrSG5_ojQcy8gCpZd9x0s3SnpS',
                api_key:'1820EC2C682E5F2B473D25A9EFA731DC',
                app_ver:'3.2'
            }, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
        });
        test('status code should be 200', async() =>{            
            expect(response.status).toEqual(200);
         });
        test('json schema shoul be valid', async()=>{
            const result = await validator.validate(response.data, profileInfoSchema);
            expect(result.valid).toEqual(true);
        });
    });
    
});

