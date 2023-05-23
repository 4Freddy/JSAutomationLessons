// @ts-check
const { test, expect } = require('@playwright/test');
const validator = require('jsonschema');
const loginSchema = require('../../data/schemas/login.schema.v1.json');
const checkZipCodeSchema = require('../../data/schemas/checkZipCode.schema.v1.json');
const getStoreSchema = require('../../data/schemas/getStore.schema.v1.json');
const profileInfoSchema = require('../../data/schemas/profileInfo.schema.v1.json');

test.use({headless: true});
test.describe('Common test for API', async () =>{

    const mainURL = 'http://api-legacy.buggy.ca';
    const apiVersion = '/v2.0';

    test('Should response with 200 code and have valid JSON schema while login', async({request})=>{  
        const response = await request.post(mainURL+apiVersion+'/user/login', { 
            multipart: {
            login: '4freddy@mail.ru',
            password: 'password2',
            isAnonymous:'false',
            api_lang:'en',
            api_key:'1820EC2C682E5F2B473D25A9EFA731DC',
            app_ver:'3.2'
        },
        headers: {
            ContentType: 'multipart/form-data'
        }}); 
    
        expect(await response.status()).toBe(200); 
        const result = await validator.validate(response.json(), loginSchema);
        expect(result.valid).toEqual(true);
    });

    test('Should response with 200 code and have valid JSON schema while checking zip code', async({request})=>{  
        const response = await request.post(mainURL+apiVersion+'/user/check_zip', { 
            multipart: {
                zip: 'M5J 2T6',
                street: '200 Bay St., Toronto, ON M5J 2T6',
                isAnonymous:'true',
                api_lang:'en',
                api_key:'1820EC2C682E5F2B473D25A9EFA731DC',
                app_ver:'3.2'
        },
        headers: {
            ContentType: 'multipart/form-data'
        }}); 
    
        expect(await response.status()).toBe(200); 
        const result = await validator.validate(response.json(), checkZipCodeSchema);
        expect(result.valid).toEqual(true);
    });
    test('Should response with 200 code and have valid JSON schema while getting store', async({request})=>{  
        const response = await request.post(mainURL+apiVersion+'/store/get_store', { 
            multipart: {
                store_id: '169',
                full_depts: '200 Bay St., Toronto, ON M5J 2T6',
                is_changing_current_store: 'true',
                user_key: 'Ug4DBAEBOxQGUwdUVgFVVVkFVwZSBFMBVFJSCgxaUF9WVFcGAVJQ',
                api_lang:'en',
                device_token:'cVbRH39gw0Gmly5toptdYn:APA91bFdHKEqWKoBwufiPuPp6OFsqEi4SoqwTMucC3gcQROasBEIDiRGf9b22CbOOOUL3IxRQ7pjQS8SO54pkJK0c1I83Bj0kC-NO8cl1H9LJIvzbHxrSG5_ojQcy8gCpZd9x0s3SnpS',
                api_key:'1820EC2C682E5F2B473D25A9EFA731DC',
                app_ver:'3.2'
        },
        headers: {
            ContentType: 'multipart/form-data'
        }}); 
    
        expect(await response.status()).toBe(200); 
        const result = await validator.validate(response.json(), getStoreSchema);
        expect(result.valid).toEqual(true);
    });
    test('Should response with 200 code and have valid JSON schema while getting profile info', async({request})=>{  
        const response = await request.post(mainURL+apiVersion+'/user/profile_info', { 
            multipart: {
                user_key: 'Ug4DBAEBOxQGUwdUVgFVVVkFVwZSBFMBVFJSCgxaUF9WVFcGAVJQ',
                api_lang:'en',
                device_token:'cVbRH39gw0Gmly5toptdYn:APA91bFdHKEqWKoBwufiPuPp6OFsqEi4SoqwTMucC3gcQROasBEIDiRGf9b22CbOOOUL3IxRQ7pjQS8SO54pkJK0c1I83Bj0kC-NO8cl1H9LJIvzbHxrSG5_ojQcy8gCpZd9x0s3SnpS',
                api_key:'1820EC2C682E5F2B473D25A9EFA731DC',
                app_ver:'3.2'
        },
        headers: {
            ContentType: 'multipart/form-data'
        }}); 
    
        expect(await response.status()).toBe(200); 
        const result = await validator.validate(response.json(), profileInfoSchema);
        expect(result.valid).toEqual(true);
    });
 });

    







