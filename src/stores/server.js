import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCookie, setCookie } from '@/shared/utils'
import * as constant from '@/shared/constant'
import FormData from 'form-data';


export const useServerStore = defineStore('server', () => {
    const temp_access_key = ref(null)
    const userDetails = ref(null)

    async function login(){
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
        let data = await fetch(`${constant.endpoint}/login/google`, requestOptions)
        let response = await data.text()
        return await JSON.parse(response);
    }

    async function verifyAndStoreAccessToken(access_token){
        temp_access_key.value = access_token
        let data = await validateAccessToken(temp_access_key.value)
        if(data.hasOwnProperty('message')){
            return false
        } else {
            userDetails.value = data
            setCookie('token', access_token, 10)
            return true
        }
    }

    async function checkIfAccessTokenIsExistAndValid(){
        temp_access_key.value = getCookie('token')
        if(temp_access_key.value == null){
            return false
        }
        let data = await validateAccessToken(temp_access_key.value)
        if(data.hasOwnProperty('message')){
            return false
        } else {
            userDetails.value = data
            return true
        }
    }

    async function logout(){
        setCookie('token','',0)
        return true
    }

    async function validateAccessToken(access_token){
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${access_token}`);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
        let response = await fetch(`${constant.endpoint}/user/info`, requestOptions)
        let finalResponse =  await response.text()
        return await JSON.parse(finalResponse)
    }

    async function getUnverifiedDocument() {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let unverifyRespone = await fetch(`${constant.endpoint}/fetch/unverifed/documents`, requestOptions)
        let unverifiedDocumentsText = await unverifyRespone.text();
        return await JSON.parse(unverifiedDocumentsText);
    }

    async function getVerifiedDocument() {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let verifyResponse = await fetch(`${constant.endpoint}/fetch/verifed/documents`, requestOptions)
        let verifiedDocumentsText = await verifyResponse.text();
        return await JSON.parse(verifiedDocumentsText);
    }

    async function uploadDocument(user_id, document_name, document_category, document_source_url, document_remark, fileInput,path) {
     
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ya29.a0AfB_byCTa5A_5-pPPZJ7remOFAozBWO_dpFzdktEvaR9h9HbNoVxdcJSOAcCqYhQO4L0SCircvc8IT8N3-FSntK886RjWywwusLFcPzt8HxOn0XkPTvdz9BYAKIh3fz12pqVHnRiV0WzviobxX8gJbv5tXQl_AtoZQLWaCgYKAVwSARESFQHGX2MijVRmxQ3TmbpcSc2ot7wrlQ0171`);
        myHeaders.append("Content-Type", "multipart/form-data");

        let formdata = new FormData();
        formdata.append("user_id", user_id);
        formdata.append("document_name", document_name);
        formdata.append("document_category", document_category);
        formdata.append("document_source_url", document_source_url);
        formdata.append("upload_remark", document_remark);
        formdata.append("file", fileInput);

        console.log("FormData:", formdata); // Check FormData object in console

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata
            
        };
           let response =  await fetch(`${constant.endpoint}/upload/pdfdoc`, requestOptions)
           let finalResponse =  await response.text()
           console.log(JSON.parse(finalResponse));
           return await JSON.parse(finalResponse)
    }

    async function verifyDocument(user_id, document_id, verify_remark, is_legit ) {
        var raw = JSON.stringify({
            "verify_by": user_id,
            "document_id": document_id,
            "verify_remark": verify_remark,
            "is_legit": is_legit
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          let data = await fetch(`${constant.endpoint}/verify/document`, requestOptions)
          let response = await data.text()
          return await JSON.parse(response)
    }

    return { temp_access_key, userDetails, getUnverifiedDocument, getVerifiedDocument, uploadDocument,verifyDocument, login,verifyAndStoreAccessToken,checkIfAccessTokenIsExistAndValid,logout }
})


