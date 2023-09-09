import { apiDelete, apiGet, apiPost, apiPostImage, apiPut } from "./Api";
const routes = {
  BLOG_MS: {
    BASE_PATH: process.env.NEXT_PUBLIC_BLOGS_API_URL,
    // BASE_PATH: "http://localhost:3001/blogms/api/v1",
    APIS: {
      // GET API
      GET_BLOG_CAMPAING_BY_ID: async (data) => {
        return await apiGet(`/blogcampaign/${data}`, "BLOG_MS");
      },
      GET_BLOG_CAMPAING_COUNT: async (data) => {
        return await apiGet(`/blogcampaign/${data}`, "BLOG_MS");
      },
      GET_BLOG_BY_ID: async (data) => {
        return await apiGet(`/blog/blogById/${data}`, "BLOG_MS");
      },
      GET_BLOG_CAMPAING_CAMPAIGNBLOGSID: async (data) => {
        return await apiGet(
          `/blogcampaign/getblogcardsincampaign${data}`,
          "BLOG_MS"
        );
      },
      GET_BLOG_BLOGCAMPAING: async (data) => {
        return await apiGet("/blogcampaign/", "BLOG_MS");
      },
      GET_BLOG_CAMPAING_BLOGDESIGNS: async () => {
        return await apiGet("/blogdesign", "BLOG_MS");
      },
      GET_BLOG_CARD_WITH_DESIGN: async (id) => {
        return await apiGet(`/blogdesign/organization/${id}`, "BLOG_MS");
      },
      GET_ALL_BLOGS: async (data) => {
        return await apiGet(`/blog/all/${data}`, "BLOG_MS");
      },

      GET_BLOG_COMMENTBYID: async (data) => {
        return await apiGet(`/comment/getcomments/${data}`, "BLOG_MS");
      },
      GET_BLOG_REPLY_COMMENTBYID: async (data) => {
        return await apiGet(`/comment/getreply/${data}`, "BLOG_MS");
      },
      GET_LIKES_BY_COMMENT_ID: async (data) => {
        return await apiGet(`/comment/like/${data}`, "BLOG_MS");
      },

      GET_BLOG_BY_CAMPAIGN_ID: async (data) => {
        return await apiGet(`/blog/blogcampaign/${data}`, "BLOG_MS");
      },
      GET_BLOGS_BY_USER_ID: async (data) => {
        return await apiGet(`/blog/user/${data}`, "BLOG_MS");
      },
      GET_SUBSCRIBERS: async (data) => {
        return await apiGet(`/subscribers/${data}`, "BLOG_MS");
      },

      GET_USER_DASHBOARD: async (data) => {
        return await apiGet(
          `/useranalytics/analyticsbycampaignid/${data}`,
          "BLOG_MS"
        );
      },
      GET_USER_ANALYTICS_BY_OWNER_ID: async (id) => {
        return await apiGet(`'/analyticsbyownerid/${id}`, "BLOG_MS");
      },
      SEARCH_USER_ANALYTICS_BY_BLOG: async (searchquery) => {
        return await apiGet(
          `'/searchanalyticsbyblog/${searchquery}`,
          "BLOG_MS"
        );
      },
      SEARCH_USER_ANALYTICS_BY_CAMPAIGN: async (searchquery) => {
        return await apiGet(
          `'/searchanalyticsbycampaign/${searchquery}`,
          "BLOG_MS"
        );
      },
      GET_POPULAR_BLOGS_Id: async (data) => {
        return await apiGet(`/blog${data}`, "BLOG_MS");
      },
      GET_POPULAR_BLOGS: async (data) => {
        return await apiPost(`/blog/getpopularblogs`, {}, "BLOG_MS");
      },
      SEARCH_BLOGS: async (data) => {
        return await apiGet(`/blog/search/${data}`, "BLOG_MS");
      },

      GET_POPULAR_COMMENTS_BY_OWNER_ID: async (id) => {
        return await apiGet(`/comment/popularcomentsbyowner/${id}`, "BLOG_MS");
      },
      GET_POPULAR_COMMENTS_BY_CAMPAIGN_ID: async (id) => {
        return await apiGet(
          `/comment/popularcomentsbycampaign/${id}`,
          "BLOG_MS"
        );
      },
      GET_POPULAR_COMMENTS_BY_BLOG_ID: async (id) => {
        return await apiGet(`/comment/popularcomentsbyblog/${id}`, "BLOG_MS");
      },
      GET_POPULAR_BLOGS_USER_ID: async (id) => {
        return await apiGet(`/blog/getpopularblogsbyuser/${id}`, "BLOG_MS");
      },
      GET_RECENT_BLOGS_BY_OWNER_ID: async (id) => {
        return await apiGet(`/blog/getrecentblogs/${id}`, "BLOG_MS");
      },
      GET_RECENT_CAMPAIGNS_BY_OWNER_ID: async (id) => {
        return await apiGet(
          `/blogcampaign/recentcampaignsbyownerid/${id}`,
          "BLOG_MS"
        );
      },
      GET_BLOG_BY_TITLE: async (title) => {
        return await apiGet(`/blog/getByTitle/${title}`, "BLOG_MS");
      },
      GET_TREANDING_TOPICS_BY_OWNER_ID: async (id) => {
        return await apiGet(
          `/useranalytics/gettreandingtopics/${id}`,
          "BLOG_MS"
        );
      },
      GET_RECENT_BLOGS: async () => {
        return await apiGet(`/blog/recent-blogs`, "BLOG_MS");
      },
      ONE_AI_BLOGS: async (data) => {
        return await apiGet(`/blog/getblogbyoneai/${data}`, "BLOG_MS");
      },

      GET_BLOGS_BY_USERNAME:async (data) => {
        return await apiGet(`/blog/getblogbyusername/${data.name}`, "BLOG_MS");
      },

      // POST API
      UPLOAD_BLOG_IMAGE: async (data) =>
        await apiPost("/image/unsplash", data, "BLOG_MS"),
      CREATE_BLOG_CAMPAIGN: async (data) =>
        await apiPost("/blogcampaign", data, "BLOG_MS"),
      SAVE_BLOG: async (data) => await apiPost("/blog", data, "BLOG_MS"),
      CREATE_BLOG_COMMENT: async (data) =>
        await apiPost("/comment", data, "BLOG_MS"),
      POST_BLOG_COMMENT_REPLY: async (data) =>
        await apiPost("/comment/reply", data, "BLOG_MS"),
      CREATE_USER_MESSAGE: async (data) =>
        await apiPost("/userquery", data, "BLOG_MS"),
      SUBSCRIBE: async (data) => await apiPost("/subscribers", data, "BLOG_MS"),
      POST_USER_ANALYTICS: async (data) =>
        await apiPost("/useranalytics", data, "BLOG_MS"),
      UPLOAD_LOCAL_IMAGE_BLOG: async (data) =>
        await apiPostImage("/image/uploadimage", data, "BLOG_MS"),

      // PUT API
      UPDATE_BLOG_CAMPAING: async (data) =>
        await apiPut("/blogcampaign", data, "BLOG_MS"),
      AUTO_SAVE_BLOG: async (data) => await apiPut("/blog", data, "BLOG_MS"),
      UPDATE_BLOG_COMMENT: async (data) =>
        await apiPut("/comment", data, "BLOG_MS"),
      UPDATE_BLOG: async (data) => {
        await apiPut("/blog", data, "BLOG_MS");
      },

      //DELETE APIS
      DELETE_BLOG_COMMENT: async (id) =>
        await apiDelete(`/comment/${id}`, "BLOG_MS"),
      UNSUBSCRIBE_BLOG: async (id) =>
        await apiDelete(`/subscribers/${id}`, "BLOG_MS"),
      DELETE_BLOG: async (id) =>
        await apiDelete(`/blog/deleteblog/${id}`, "BLOG_MS"),
    },
  },
  USER_MS: {
    BASE_PATH: process.env.NEXT_PUBLIC_USERS_AUTH_API_URL,
    // BASE_PATH: "http://localhost:3003/userms/api/v1",
    APIS: {
      // GET API
      GET_BLOG_CAMPAING_BY_ID: async (data) => {
        return await apiGet("/", "USER_MS");
      },
      GET_USER_PROFILE: async (data) => {
        return await apiGet(`/profile/${data}`, "USER_MS");
      },

      // POST API
      LOGIN: async (data) =>
        await apiPost("/userauth/send-otp", data, "USER_MS"),
      VERIFY: async (data) =>
        await apiPost("/userauth/verify", data, "USER_MS"),
      CREATE_USER_PROFILE: async (data) =>
        await apiPost("/profile", data, "USER_MS"),
      UPLOAD_USER_PROFILE_IMAGE: async (data) =>
        await apiPostImage("/image/", data, "USER_MS"),
      GOOGLE_OAUTH: async (data) => {
        var SERVICE = "DOC-ADMIN";
        return await apiPost(
          `/userauth/googleoauth/${SERVICE}`,
          data,
          "USER_MS"
        );
      },
      // PUT API
      UPDATE_USER_PROFILE: async (data) =>
        await apiPut("/profile", data, "USER_MS"),
      GET_ALL_USERS: async () => {
        return await apiGet("/profile/all", "USER_MS");
      },
      GET_ALL_POLICIES: async () => {
        return await apiGet("/policy/all", "USER_MS");
      },
      GET_ALL_ROLES: async () => {
        return await apiGet("/roles", "USER_MS");
      },
      ADMIN_LOGIN: async (data) => {
        return await apiPost("/admin/verify", data, "USER_MS");
      },
      ADMIN_GET_PROFILE_WITH_ROLES: async (data) => {
        return await apiGet("/profile/role/" + data, "USER_MS");
      },
    },
  },
  ORGANIZATION_PROFILE: {
    ORGANIZATION_PATH: process.env.NEXT_PUBLIC_ORGANIZATION_PROFILE_API_URL,
    APIS: {
      // GET API
      GET_ORGANIZATION_PROFILE: async (data) => {
        return await apiGet(`/profile/${data}`, "ORGANIZATION_PROFILE");
      },
      GET_ORGANIZATION_PROFILE_LOGO: async (data) => {
        return await apiGet(`/image/${data}`, "ORGANIZATION_PROFILE");
      },

      // POST API
      CREATE_ORGANIZATION_PROFILE: async (data) =>
        await apiPost("/profile/", data, "ORGANIZATION_PROFILE"),
      CREATE_ORGANIZATION_PROFILE_IMAGE: async (data) =>
        await apiPostImage("/image/", data, "ORGANIZATION_PROFILE"),

      // PUT API
      UPDATE_ORGANIZATION_PROFILE: async (data) =>
        await apiPut("/profile/", data, "ORGANIZATION_PROFILE"),
    },
  },
  PAYMENT_MS: {
    PAYMENT_MS_PATH: "http://localhost:3007/api/v1/",
    // PAYMENT_MS_PATH: process.env.NEXT_PUBLIC_PAYMENT_MS_API_URL,
    APIS: {
      // POST API
      MAKE_PAYMENT: async (data, route) =>
        await apiPost(`userpayments/${route}`, data, "PAYMENT_MS"),
      // GET API
      MAKE_PAYMENT_GET: async (data) => {
        return await apiGet("PAYMENT_MS", data, `userpayments/${data}`);
      },
      MAKE_PAYMENT_PUT: async (data) => {
        // return await apiPut(`userpayments/${route}`, data, "PAYMENT_MS");
        return await apiPut(`userpayments/`, data, "PAYMENT_MS");
      },
    },
  },
  HR_TOOLS: {
    // BASE_PATH: "http://localhost:3006/docms/api/v1",
    BASE_PATH: process.env.NEXT_PUBLIC_HRTOOLS_API_URL,
    APIS: {
      GET_SEARCH_FORMS: async (data) => {
        // return await apiGet(`/form/search/${data}`, "HR_TOOLS")}
        return await apiGet(`/form/search/${data}`, "HR_TOOLS");
      },
      GET_FILTER_FORMS: async (data) => {
        return await apiGet(`/form/filter/${data}`, "HR_TOOLS");
      },
      GET_ALL_FORMS: async (data) => {
        return await apiGet(`/form/`, "HR_TOOLS");
      },
      GET_FORMS_BY_USERID: async (data) => {
        return await apiGet(`/userforms/getForm/${data}`, "HR_TOOLS");
      },
      GET_FORM_BY_FORMID: async (data) => {
        return await apiGet(`/form/${data}`, "HR_TOOLS");
      },
      POST_USER_CREATED_FORM: async (data) => {
        return await apiPost(`/userforms/`, data, "HR_TOOLS");
      },
      GET_USER_CREATED_FORM_BY_ID: async (data) => {
        return await apiGet(`/userforms/${data}`, "HR_TOOLS");
      },
      DELETE_USER_CREATED_FORM: async (data) => {
        return await apiDelete(`/form/${data}`, "HR_TOOLS");
      },
      // USE THIS TO CREATE NEW FORM
      POST_NEW_FORM: async (data) => {
        return await apiPost(`/form/`, data, "HR_TOOLS");
      },
      GET_IMAGE_URL_FROM_AWS: async (data) => {
        return await apiPostImage("/form/image-upload/", data, "HR_TOOLS");
      },
      // USE THIS TO UPDATE
      PUT_FORM: async (data) => {
        return await apiPut("/form", data, "HR_TOOLS");
      },
      DELETE_FORM: async (data) => {
        return await apiDelete(`/form/${data}`, "HR_TOOLS");
      },
      GET_AI_SUGGESTIONS_FOR_FORM: async (data) => {
        return await apiPost("/form/getSuggestions", data, "HR_TOOLS");
      },
      CREATE_FORM_WITH_TINY_MC: async (data) => {
        return await apiPost("/form/tinymcapi", data, "HR_TOOLS");
      },
      CONVERT_DOC_FILE_TO_HTML: async (data) => {
        return await apiPost("/file-convertor/docx", data, "HR_TOOLS");
      },
      CONVERT_DOC_FILE_TO_HTML: async (data) => {
        return await apiPost("/file-convertor/xlsx", data, "HR_TOOLS");
      },
    },
  },
  SIGNTAURE_API: {
    BASE_PATH: process.env.NEXT_PUBLIC_HRTOOLS_API_URL,
    API: {
      GET_OWNER_DATA: async (data, route) => {
        return await apiGet(
          `/filesignatures/${route}/${data}`,
          "SIGNTAURE_API"
        );
      },
      POST_FORM: async (data, route) => {
        return await apiPostImage(
          `/filesignatures/${route}`,
          data,
          "SIGNTAURE_API"
        );
      },
    },
  },
  CALCULATOR_TOOL: {
    BASE_PATH: process.env.NEXT_PUBLIC_HRTOOLS_API_URL,
    APIS: {
      GET_ALL_CALCULATORS: async (data) => {
        return await apiGet("/Calculator", "CALCULATOR_TOOL");
      },
      GET_CALCULATOR_BY_ID: async (data) => {
        return await apiGet(`/CALCULATOR/${data}`, "CALCULATOR_TOOL");
      },
    },
  },

  SHARE_API: {
    BASE_PATH: process.env.NEXT_PUBLIC_HRTOOLS_API_URL,
    // BASE_PATH : 'http://localhost:3006/docms/api/v1/',
    APIS: {
      GET_USER_SAHRED: async (data) => {
        return await apiGet(`/shared/owner/${data}`, "SHARED_API");
      },
      GET_SHARE_BY_ID: async (data) => {
        return await apiGet(`/shared/${data}`, "SHARED_API");
      },
      POST_SHARED: async (data) => {
        return await apiPost("/shared", data, "SHARED_API");
      },
      UPDATE: async (data) => {
        return await apiPut("/shared", data, "SHARED_API");
      },
    },
  },
  SHARED_DOCS: {
    BASE_PATH: process.env.NEXT_PUBLIC_HRTOOLS_API_URL,
    APIS: {
      GET_SHARED_DOCS_BY_SHARE_ID: async (data) => {
        return await apiGet(`/shareddocs/shareid/${data}`, "SHARED_DOC");
      },
      POST_SHARED_DOCS: async (data) => {
        return await apiPost("/shareddocs", data, "SHARED_DOC");
      },
      GET_SHARED_DOCS_BY_ID: async (data) => {
        return await apiGet(`/shareddocs/${data}`, "SHARED_DOC");
      },
      POST_SHARED: async (data) => {
        return await apiPost("/shareddocs/", data, "SHARED_API");
      },
    },
  },
  GOOGLE_APIS: {
    BASE_PATH: process.env.NEXT_PUBLIC_HRTOOLS_API_URL,
    // BASE_PATH : 'http://localhost:3006/docms/api/v1/',
    // BASE_PATH : 'http://192.168.1.14:3006/docms/api/v1' ,
    APIS: {
      GET_DRIVE_DOCS: async (token) => {
        return await apiGet(`/googleapi/drive?token=${token}`, "GOOGLE_API");
      },
      POST_DOC: async (data) => {
        return await apiPost(`/googleapi/doc`, data, "GOOGLE_API");
      },
    },
  },
  REPORT: {
    BASE_PATH: process.env.NEXT_PUBLIC_HRTOOLS_API_URL,
    // BASE_PATH : 'http://localhost:3006/docms/api/v1/',
    APIS: {
      GET_BY_ID: async (data) => {
        return await apiGet(`/report/${data}`, "REPORT");
      },
      GET_ALL_REPORTS: async () => {
        return await apiGet("/report", "REPORT");
      },
      UPDATE_REPORT: async (data) => {
        return await apiPut("/report/revert", data, "REPORT");
      },
    },
  },
  RECOMMANDATION: {
    BASE_PATH: process.env.NEXT_PUBLIC_HRTOOLS_API_URL,
    // BASE_PATH : 'http://localhost:3006/docms/api/v1/',
    APIS: {
      GET_RECOMMANDATION_BY_ID: async (data) => {
        return await apiGet(`/recommandation/${data}`, "RECOMMAND");
      },
      GET_ALL_RECOMMANDATIOn: async () => {
        return await apiGet("/recommandation", "RECOMMAND");
      },
      UPDATE_RECOMMANDATOIN: async (data) => {
        return await apiPut("/recommandation", data, "RECOMMAND");
      },
    },
  },
};

export default routes;
