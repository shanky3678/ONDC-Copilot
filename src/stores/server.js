import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getCookie, setCookie } from "@/shared/utils";
import * as constant from "@/shared/constant";

export const useServerStore = defineStore("server", () => {
  const temp_access_key = ref(null);
  const universal_loading = ref(false);
  const point_plus_one = ref(false);
  const point_plus_ten = ref(false);
  const userDetails = ref(null);

  async function login() {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let data = await fetch(`${constant.endpoint}/login/google`, requestOptions);
    let response = await data.text();
    return await JSON.parse(response);
  }

  async function verifyAndStoreAccessToken(access_token) {
    temp_access_key.value = access_token;
    let data = await validateAccessToken(temp_access_key.value);
    if (data.hasOwnProperty("message")) {
      return false;
    } else {
      userDetails.value = data;
      setCookie("token", access_token, 10);
      return true;
    }
  }

  async function checkIfAccessTokenIsExistAndValid() {
    temp_access_key.value = getCookie("token");
    if (temp_access_key.value == null) {
      return false;
    }
    let data = await validateAccessToken(temp_access_key.value);
    if (data.hasOwnProperty("message")) {
      return false;
    } else {
      userDetails.value = data;
      return true;
    }
  }

  async function logout() {
    setCookie("token", "", 0);
    temp_access_key.value = null;
    return true;
  }

  async function validateAccessToken(access_token) {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${access_token}`);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let response = await fetch(
      `${constant.endpoint}/user/info`,
      requestOptions
    );
    let finalResponse = await response.text();
    return await JSON.parse(finalResponse);
  }

  async function getUnverifiedDocument() {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let unverifyRespone = await fetch(
      `${constant.endpoint}/fetch/unverifed/documents`,
      requestOptions
    );
    let unverifiedDocumentsText = await unverifyRespone.text();
    return await JSON.parse(unverifiedDocumentsText);
  }

  async function getVerifiedDocument() {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let verifyResponse = await fetch(
      `${constant.endpoint}/fetch/verifed/documents`,
      requestOptions
    );
    let verifiedDocumentsText = await verifyResponse.text();
    return await JSON.parse(verifiedDocumentsText);
  }

  async function uploadDocument(
    user_id,
    document_name,
    document_category,
    document_source_url,
    document_remark,
    fileInput
  ) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);

    let formdata = new FormData();
    formdata.append("user_id", user_id);
    formdata.append("document_name", document_name);
    formdata.append("document_category", document_category);
    formdata.append("document_source_url", document_source_url);
    formdata.append("upload_remark", document_remark);
    formdata.append("file", fileInput);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };
    let response = await fetch(
      `${constant.endpoint}/upload/pdfdoc`,
      requestOptions
    );
    let finalResponse = await response.text();
    return await JSON.parse(finalResponse);
  }

  async function verifyDocument(user_id, document_id, verify_remark, is_legit) {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    console.log(user_id, document_id, verify_remark, is_legit);
    let inputValues = {
      verify_by: user_id.toString(),
      document_id: document_id.toString(),
      verify_remark: verify_remark.toString(),
      is_legit: is_legit.toString(),
    };
    let raw = JSON.stringify(inputValues);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    let data = await fetch(
      `${constant.endpoint}/verify/document`,
      requestOptions
    );
    let response = await data.text();
    return await JSON.parse(response);
  }

  async function fetchRanking() {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let data = await fetch(`${constant.endpoint}/user/ranking`, requestOptions);
    let response = await data.text();
    return await JSON.parse(response);
  }

  async function updateUserPoints(event) {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    let formdata = new FormData();
    formdata.append("user_id", userDetails.value.id);
    formdata.append("event", event);
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    let data = await fetch(`${constant.endpoint}/user/points`, requestOptions);
    let response = await data.text();
    return await JSON.parse(response);
  }

  async function setUniBusy(value) {
    universal_loading.value = value;
  }

  async function getPageCount(
    page_size,
    status_codes = [],
    act_numbers = [],
    short_title = "",
    act_department = ""
  ) {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        status_codes: status_codes,
        act_numbers: act_numbers,
        short_title: short_title,
        act_department: act_department,
      }),
    };

    let data = await fetch(
      `${constant.endpoint}/fetch/act_page_count?page_size=${page_size}`,
      requestOptions
    );
    let response = await data.text();
    return await JSON.parse(response);
  }

  async function getPageDocuments(
    page_number,
    page_size,
    status_codes = [],
    act_numbers = [],
    short_title = "",
    act_department = ""
  ) {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    let raw = JSON.stringify({
      state_codes: status_codes,
      act_numbers: act_numbers,
      short_title: short_title,
      act_department: act_department,
    });
    console.log("raw", raw);
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    let data = await fetch(
      `${constant.endpoint}/fetch/act_rows?page=${page_number}&page_size=${page_size}`,
      requestOptions
    );
    let response = await data.text();
    return await JSON.parse(response);
  }

  async function getStateMapping() {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    let data = await fetch(
      `${constant.endpoint}/fetch/state_mapping`,
      requestOptions
    );
    let response = await data.text();
    return await JSON.parse(response);
  }

  async function getPageDocumentsDetails(act_id) {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    myHeaders.append("Authorization", `Bearer ${temp_access_key.value}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    console.log("act_id", act_id);

    let data = await fetch(
      `${constant.endpoint}/fetch/act_details?id=${act_id}`,
      requestOptions
    );
    let response = await data.text();
    return await JSON.parse(response);
  }

  return {
    getPageCount,
    getStateMapping,
    getPageDocuments,
    getPageDocumentsDetails,
    universal_loading,
    point_plus_one,
    point_plus_ten,
    temp_access_key,
    userDetails,
    setUniBusy,
    getUnverifiedDocument,
    getVerifiedDocument,
    uploadDocument,
    verifyDocument,
    login,
    verifyAndStoreAccessToken,
    checkIfAccessTokenIsExistAndValid,
    logout,
    fetchRanking,
    updateUserPoints,
  };
});
