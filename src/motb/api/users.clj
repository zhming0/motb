(ns motb.api.users
  (use [compojure.core :only [defroutes GET POST]]
       [ring.util.response :only [response status]]
       [ring.middleware.session :only [wrap-session]]
       [motb.auth :only [unauth-response wrap-auth]]))

(defn- valid-login? [request]
  (let [params (:json-params request)
        uname (params "username")
        passwd (params "password")]
    (if (= "ming" uname passwd)
      true
      false)))

(defn- valid-login-handler [request]
  {:status 200
   :body {"login" "succeeded"}
   :session {:login true}})

(defn- invalid-login-handler [request]
  (unauth-response "Username or password is wrong"))

(defn login [request]
  (if (valid-login? request)
    (valid-login-handler request)
    (invalid-login-handler request)))

(defn checkLogin [request]
  (response {"login" "already success"}))

(defn logout [request]
  {:status 200
   :body "success"
   :session {}})

(defroutes users-routes
  (GET "/users/login" [] (wrap-auth checkLogin))
  (GET "/users/logout" [] logout)
  (POST "/users/login" [] login))
